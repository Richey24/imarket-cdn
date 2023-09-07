import theme1TemplateConfig from "./theme1";
import theme2TemplateConfig from "./theme2";
import theme3TemplateConfig from "./theme3";
import theme4TemplateConfig from "./theme4";
import theme5TemplateConfig from "./theme5";
import theme7TemplateConfig from "./theme7";
import theme8TemplateConfig from "./theme8";
import theme9TemplateConfig from "./theme9";
// import theme12TemplateConfig from "./theme12";
import theme13TemplateConfig from "./theme13";
import theme14TemplateConfig from "./theme14";
import theme15TemplateConfig from "./theme15";
import theme16TemplateConfig from "./theme16";
import theme17TemplateConfig from "./theme17";
import theme18TemplateConfig from "./theme18";
import theme19TemplateConfig from "./theme19";
import theme20TemplateConfig from "./theme20";
import theme21TemplateConfig from "./theme21";
import theme22TemplateConfig from "./theme22";
import theme25TemplateConfig from "./theme25";
import theme30TemplateConfig from "./theme30";
import theme31TemplateConfig from "./theme31";
import theme32TemplateConfig from "./theme32";
import theme33TemplateConfig from "./theme33";
import theme34TemplateConfig from "./theme34";
import theme35TemplateConfig from "./theme35";
import theme36TemplateConfig from "./theme36";
import theme37TemplateConfig from "./theme37";
import theme38TemplateConfig from "./theme38";
import theme39TemplateConfig from "./theme39";
import theme40TemplateConfig from "./theme40";
import theme41TemplateConfig from "./theme41";
import theme42TemplateConfig from "./theme42";

export const templateConfig: any = {
     theme1: theme1TemplateConfig,
     theme2: theme2TemplateConfig,
     theme3: theme3TemplateConfig,
     theme4: theme4TemplateConfig,
     theme5: theme5TemplateConfig,
     theme7: theme7TemplateConfig,
     theme8: theme8TemplateConfig,
     theme9: theme9TemplateConfig,
     // theme12: theme12TemplateConfig,
     theme13: theme13TemplateConfig,
     theme14: theme14TemplateConfig,
     theme15: theme15TemplateConfig,
     theme16: theme16TemplateConfig,
     theme17: theme17TemplateConfig,
     theme18: theme18TemplateConfig,
     theme19: theme19TemplateConfig,
     theme20: theme20TemplateConfig,
     theme21: theme21TemplateConfig,
     theme22: theme22TemplateConfig,
     theme25: theme25TemplateConfig,
     theme30: theme30TemplateConfig,
     theme31: theme31TemplateConfig,
     theme32: theme32TemplateConfig,
     theme33: theme33TemplateConfig,
     theme34: theme34TemplateConfig,
     theme35: theme35TemplateConfig,
     theme36: theme36TemplateConfig,
     theme37: theme37TemplateConfig,
     theme38: theme38TemplateConfig,
     theme39: theme39TemplateConfig,
     theme40: theme40TemplateConfig,
     theme41: theme41TemplateConfig,
     theme42: theme42TemplateConfig,
};

export const cssImports = (len = 42) => {
     let obj = {}
     for (let i = 1; i <= len; i++) {
          obj[`theme${i}`] = `demo${i}`
     }
     return obj
}

export const themeProps = {
     header: {
          company: {},
          static: {
               languages: [],
               currencies: [],
               socials: [
                    { name: "facebook", link: "/" },
                    { name: "instagram", link: "/" },
                    { name: "twitter", link: "/" },
               ],
               pageLinks: [
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
};
