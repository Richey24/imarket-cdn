import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export const withAuth = (WrappedComponent) => {
     const Wrapper = (props) => {
          const { status, data } = useSession();
          const router = useRouter();
          console.log("me", data);
          useEffect(() => {
               if (status === "unauthenticated") {
                    router.push("/login");
               }
          }, [status, data, router]);

          if (status && status === "loading") {
               return <p>{status}...</p>;
          }

          if (!data) {
               return <></>;
          }
          return <WrappedComponent {...props} />;
     };

     return Wrapper;
};

export const withAuthHidden = (WrappedComponent) => {
     const Wrapper = (props) => {
          const { status, data } = useSession();
          const router = useRouter();

          useEffect(() => {
               if (status === "authenticated" || data) {
                    router.push("/dashboard");
               }
          }, [status, data, router]);

          if (status && status === "loading") {
               return <p>{status}...</p>;
          }

          return <WrappedComponent {...props} />;
     };

     return Wrapper;
};
