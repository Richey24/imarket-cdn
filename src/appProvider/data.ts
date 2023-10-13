import { templateImages } from "./templateImages";

export const dummySite = {
     theme: {
          theme: "theme5",
          footer: {
               name: "footer",
               content: "",
               component: {
                    theme: "theme5",
                    name: "",
                    props: {
                         company: {
                              city: "City",
                              country: "Country",
                              phone: "(123) 456-7890",
                         },
                         static: {
                              customerService: [
                                   { name: "Help & Faq", link: "/" },
                                   { name: "Order Tracking", link: "/" },
                                   { name: "Shipping & Delivery", link: "/" },
                                   { name: "Orders History", link: "/" },
                                   { name: "Advanced Search", link: "/" },
                                   { name: "About Us", link: "/" },
                                   { name: "Corporate Sales", link: "/" },
                                   { name: "Privacy", link: "/" },
                              ],
                              popularTags: [
                                   { name: "Cloths", link: "/" },
                                   { name: "Fashions", link: "/" },
                                   { name: "Hub", link: "/" },
                                   { name: "Shirt", link: "/" },
                                   { name: "Skirt", link: "/" },
                                   { name: "Sports", link: "/" },
                                   { name: "Sweater", link: "/" },
                              ],
                         },
                    },
               },
          },
          header: {
               name: "header",
               content: "",
               component: {
                    theme: "theme5",
                    props: {
                         company: {
                              city: "City",
                              country: "Country",
                              phone: "(123) 456-7890",
                         },
                         static: {
                              languages: [],
                              currencies: [],
                              // socials: [
                              //      { name: "facebook", link: "/" },
                              //      { name: "instagram", link: "/" },
                              //      { name: "twitter", link: "/" },
                              // ],
                              pageinks: [
                                   {
                                        name: "home",
                                        url: "/",
                                        subMenu: null,
                                   },
                                   {
                                        name: "shop",
                                        url: "/tester",
                                        subMenu: [
                                             {
                                                  name: "tester",
                                                  url: "/shop/tester",
                                             },
                                        ],
                                   },
                              ],
                         },
                    },
               },
          },
          pages: [
               {
                    name: "home",
                    layout: "",
                    sections: [
                         {
                              name: "home",
                              content: "",
                              component: {
                                   theme: "theme5",
                                   props: {
                                        static: {
                                             promotion: {
                                                  homePage: [],
                                             },
                                             banner: [
                                                  {
                                                       title: "",
                                                       text: "",
                                                       imageUrl:
                                                            templateImages["demo5"].bannerImage.banner1,
                                                  },
                                                  {
                                                       title: "",
                                                       text: "",
                                                       imageUrl:
                                                            templateImages["demo5"].bannerImage.banner1,
                                                  },
                                             ],
                                             dealsBanner: [
                                                  {
                                                       title: "",
                                                       text: "",
                                                       imageUrl: "",
                                                       link: "/",
                                                  },
                                                  {
                                                       title: "",
                                                       text: "",
                                                       imageUrl: "",
                                                       link: "/",
                                                  },
                                                  {
                                                       title: "",
                                                       text: "",
                                                       imageUrl: "",
                                                       link: "/",
                                                  },
                                             ],
                                             featuredProtured: [],
                                        },
                                   },
                              },
                         },
                    ],
               },
          ],
          pageLinks: ["home", "shop"],
          styles: {
               colors: [],
               mode: "light",
               demoLink: "demo12",
          },
     },
};
