"use client";
import { templateImages } from "@/appProvider/templateImages";
import Image from "next/image";
import React from "react";
import "./Header.css";
import HeaderLinks from "@/templates/shared/Header/HeaderLinks";
import HeaderSearch from "@/templates/shared/Header/HeaderSearch";

export default function Header(props: any) {
     const { company, static: staticProps, categories } = props.props;

     const showCanvas = () => {
          document.getElementById("cartCanvas").classList.toggle("showCanvas");
     };

     return (
          <div>
               <header className="header">
                    <HeaderLinks staticProps={staticProps} />

                    <HeaderSearch
                         company={company}
                         categories={categories}
                         showCategory={false}
                         showPhone={false}
                    />

                    <div
                         style={{ marginBottom: "30px" }}
                         className="header-bottom d-none d-lg-block"
                    >
                         <div className="container">
                              <ul className="category-menu">
                                   <li>
                                        <a href="demo41-shop.html">Fruits</a>
                                   </li>
                                   <li>
                                        <a href="demo41-shop.html">Vegetables</a>
                                   </li>
                                   <li>
                                        <a href="demo41-shop.html">Meat</a>
                                   </li>
                                   <li>
                                        <a href="demo41-shop.html">Seafood</a>
                                   </li>
                                   <li>
                                        <a href="demo41-shop.html">Deli</a>
                                   </li>
                                   <li>
                                        <a href="demo41-shop.html">Cheese</a>
                                   </li>
                                   <li>
                                        <a href="demo41-shop.html">Bakery</a>
                                   </li>
                                   <li>
                                        <a href="demo41-shop.html">Party</a>
                                   </li>
                                   <li>
                                        <a href="demo41-shop.html">Platters</a>
                                   </li>
                                   <li>
                                        <a href="demo41-shop.html">Grocery</a>
                                   </li>
                                   <li>
                                        <a href="demo41-shop.html">Frozen</a>
                                   </li>
                                   <li>
                                        <a href="demo41-shop.html">Beer</a>
                                   </li>
                                   <li>
                                        <a href="demo41-shop.html">Wines</a>
                                   </li>
                                   <li>
                                        <a href="demo41-shop.html">Dairy</a>
                                   </li>
                              </ul>
                         </div>
                    </div>
               </header>
          </div>
     );
}
