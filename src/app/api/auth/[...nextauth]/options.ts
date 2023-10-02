import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

const backendURL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const options: NextAuthOptions = {
     pages: {
          signIn: "/login",
     },
     providers: [
          CredentialsProvider({
               name: "Credentals",
               credentials: {
                    email: {
                         label: "Username:",
                         type: "text",
                         placeholder: "your-cool-username",
                    },
                    password: {
                         label: "Password:",
                         type: "password",
                         placeholder: "your-awesome-password",
                    },
               },
               async authorize(credentials) {
                    const credentialDetails = {
                         email: credentials && credentials.email,
                         password: credentials && credentials.password,
                    };

                    const { data } = await axios.post(
                         backendURL + "/auth/login",
                         credentialDetails,
                    );

                    if (data) {
                         return { ...data.user, token: data.token };
                    } else {
                         console.log("check your credentials");
                         return null;
                    }
               },
          }),
     ],
     callbacks: {
          session: ({ session, token }) => {
               console.log({ session })

               return {
                    ...session,
                    user: {
                         ...session.user,
                         id: token.id,
                         role: token.role,
                         firstname: token.firstname,
                         lastname: token.lastname,
                         randomKey: token.randomKey,
                    },
               };
          },
          jwt: ({ token, user }) => {
               if (user) {
                    const u = user as unknown as any;
                    return {
                         ...token,
                         id: u._id,
                         role: u.role,
                         firstname: u.firstname,
                         lastname: u.lastname,
                         accessToken: u.token,
                    };
               }
               return token;
          },
     },
     secret: process.env.NEXTAUTH_SECRET,
};
