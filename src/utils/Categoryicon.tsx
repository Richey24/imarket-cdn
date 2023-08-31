import React from "react";
import { FaPizzaSlice, FaTshirt, FaQuestionCircle } from "react-icons/fa";
import { GiHamburger, GiSunglasses } from "react-icons/gi";
import { IoIosRose, IoIosCar, IoIosAlert } from "react-icons/io";
import { MdLaptop, MdRestaurantMenu } from "react-icons/md";

const categoryIconMap = {
     food: FaPizzaSlice,
     clothing: FaTshirt,
     electronics: MdLaptop,
     furniture: GiSunglasses,
     flowers: IoIosRose,
     automotive: IoIosCar,
     restaurant: MdRestaurantMenu,
     burger: GiHamburger,
};

const getCategoryIcon = (categoryName, fontSize = "24px") => {
     // Default font size is 24px
     const categoryIcon = categoryIconMap[categoryName];
     if (categoryIcon) {
          return React.createElement(categoryIcon, { style: { fontSize } });
     } else {
          return <FaQuestionCircle style={{ fontSize }} />;
     }
};

export const CategoryIconComponent = ({ categoryName, fontSize }) => {
     const icon = getCategoryIcon(categoryName, fontSize);

     return (
          <div
               style={{
                    width: "273px",
                    height: 200,
                    display: "flex",
                    justifyContent: "center",
               }}
          >
               {icon}
          </div>
     );
};
