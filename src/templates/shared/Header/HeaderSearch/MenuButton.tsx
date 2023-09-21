import { setSideBarVisibility } from "@/redux/global";
import React from "react";
import { useDispatch } from "react-redux";

function MenuButton({ textColor }: { textColor?: string }) {
     const dispatch = useDispatch();

     const handleSideBarClose = () => {
          dispatch(setSideBarVisibility());
     };

     return (
          <button
               onClick={handleSideBarClose}
               className={`mobile-menu-toggler ${textColor ? textColor : " text-primary"} mr-2 `}
               type="button"
          >
               <i className="fas fa-bars"></i>
          </button>
     );
}

export default MenuButton;
