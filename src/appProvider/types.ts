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

export interface AddToCard {
     companyId: string | number;
     orderId: number;
     productId: number;
     qty: number;
     price_unit: string | number;
}

export interface CreateCard {
     companyId: string | number;
     userId: number;
     products: { productId: number; qty: number; price_unit: string | number }[];
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

export interface WishlistPayload {
     userId: string;
     productId: number;
     price: number;
     display_name: string;
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
     | "theme31"
     | "theme32"
     | "theme33"
     | "theme34"
     | "theme35"
     | "theme36"
     | "theme37"
     | "theme38"
     | "theme39"
     | "theme41"
     | "theme42";
