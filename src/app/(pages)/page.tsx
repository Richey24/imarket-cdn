"use client";
import { AppContext } from "@/appProvider";
import { templateConfig } from "@/templates/config/index";
import { useContext } from "react";

const DynamicComponent = ({ component }: { component: React.ComponentType<any> | string }) => {
     const Component = component;
     return <Component />;
};

export default function Home() {
     const currentPage = "home";

     const { site } = useContext(AppContext);
     const defualtTemplate = templateConfig[site.theme.theme];
     const loadedTemplate = site.theme.pages.find(
          (page: { name: any }) => page.name === currentPage,
     );

     const newGeneratedTemplate = () => {
          let temp = { ...defualtTemplate };
          const sections = loadedTemplate.sections;

          for (let index = 0; index < sections.length; index++) {
               // Use sections.length instead of sections
               if (
                    Object.keys(temp).includes(sections[index].name) &&
                    sections[index].component &&
                    sections[index].component.theme
               ) {
                    temp[sections[index].name] =
                         templateConfig[sections[index].component.theme][sections[index].name];
               }
          }

          return temp;
     };

     return (
          <>
               {Object.keys(newGeneratedTemplate()).map((key) => {
                    return <DynamicComponent component={newGeneratedTemplate()[key] as string} />;
               })}
          </>
     );
}
