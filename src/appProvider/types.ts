export interface SitesField {
     company: any;
     theme: {
          theme: ThemeName;
          pages: PagesField[];
          header: SectionsField;
          footer: SectionsField;
          pageLinks: string[];
          styles: {
               colors: string[];
               mode: "light" | "dark";
          };
     };
}

export interface PagesField {
     name: string;
     layout: string;
     sections: SectionsField[];
}

export interface SectionsField {
     name: string;
     content: string;
     component: {
          theme: ThemeName;
          name: string;
          props: any;
     };
}

export type ThemeName =
     | "theme1"
     | "theme2"
     | "theme3"
     | "theme4"
     | "theme5"
     | "theme6"
     | "theme7"
     | "theme8"
     | "theme9"
     | "theme10"
     | "theme11"
     | "theme12"
     | "theme13"
     | "theme14"
     | "theme15"
     | "theme16"
     | "theme17"
     | "theme18"
     | "theme19"
     | "theme20"
     | "theme30"
     | "theme31";
