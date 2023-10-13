"use client";
import { AppContext } from "@/appProvider";
import { templateConfig } from "@/templates/config/index";
import { useContext } from "react";

const DynamicComponent = ({
     component,
     props,
}: {
     component: React.ComponentType<any> | string;
     props: any;
}) => {
     const Component = component;
     return <Component {...props} />;
};

export default function Home() {
     const currentPage = "home";
     const { site, products, categories, featuredProducts, handleAddToCart } =
          useContext(AppContext);

     const newGeneratedTemplate = (): {
          [key: string]: { component?: React.ComponentType<any> | string; props?: object };
     } => {
          const defualtTemplate = templateConfig[site.theme.theme];
          const loadedTemplate = site.theme.pages.find(
               (page: { name: any }) => page.name === currentPage,
          );
          let temp = { ...defualtTemplate };
          const sections = loadedTemplate.sections;

          for (let index = 0; index < sections.length; index++) {
               // Use sections.length instead of sections
               if (
                    Object.keys(temp).includes(sections[index].name) &&
                    sections[index].component &&
                    sections[index].component.theme
               ) {
                    temp[sections[index].name] = {
                         component:
                              templateConfig[sections[index].component.theme][sections[index].name],
                         props: sections[index].component.props,
                    };
               }
          }

          const { header, footer, ...selected } = temp;
          return selected;
     };

     return Object.keys(newGeneratedTemplate()).map((key) => {
          return (
               <DynamicComponent
                    key={key}
                    component={
                         newGeneratedTemplate()[key]?.component
                              ? (newGeneratedTemplate()[key].component as string)
                              : (newGeneratedTemplate()[key] as string)
                    }
                    props={
                         newGeneratedTemplate()[key].component && {
                              ...newGeneratedTemplate()[key].props,
                              products,
                              categories,
                              featuredProducts,
                              handleAddToCart,
                         }
                    }
               />
          );
     });
}
