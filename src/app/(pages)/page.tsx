"use client";
import { AppContext } from "@/appProvider";
import { templateConfig } from "@/templates/config";
import Image from "next/image";
import { useContext } from "react";

const DynamicComponent = ({ component }: { component: React.ComponentType<any> | string }) => {
     console.log({ component });
     const Component = component;
     return <Component />;
};

export default function Home() {
     const { site } = useContext(AppContext);
     const template = templateConfig[site.theme.theme];
     return (
          <>
               {Object.keys(template).map((key) => {
                    return <DynamicComponent component={template[key]} />;
               })}
          </>
     );
}
