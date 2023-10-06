import { setSideBarVisibility } from "@/redux/global";
import { RootState } from "@/redux/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

function MenuButton({ textColor }: { textColor?: string }) {
     const dispatch = useDispatch();
     const { isSideBarVisible } = useSelector((state: RootState) => state.general);

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
