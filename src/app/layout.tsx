/* eslint-disable @next/next/no-css-tags */
"use client";
import React from "react";
import AppProvider from "@/appProvider";
import { Providers } from "@/redux/provider";
import { Toaster } from "react-hot-toast";
import { ToastContainer } from "react-toastify";
import ReactQueryProviders from "@/utils/provider";
import { SessionProvider } from "next-auth/react";
import "./globals.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import $ from "jquery";
import Popper from "popper.js";
import Script from "next/script";
import Head from "next/head";
import "owl.carousel/dist/assets/owl.carousel.css";
import "../assets/css/bootstrap.min.css";
import "../assets/vendor/fontawesome-free/css/all.min.css";
import "../assets/vendor/simple-line-icons/css/simple-line-icons.min.css";
// import "../assets/js/webfont";
// import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StyledJsxRegistry from "@/registry";
import "mapbox-gl/dist/mapbox-gl.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
     const loadJS = async () => {
          (await import("../assets/js/webfont")).default;
     };
     React.useEffect(() => {
          loadJS();
     }, []);

     return (
          <html lang="en">
               <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <script
                         async
                         src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js"
                    ></script>
                    <script src="../assets/js/jquery.min.js" defer />
                    <script src="../assets/js/bootstrap.bundle.min.js" defer />
                    <script src="../assets/js/optional/imagesloaded.pkgd.min.js" defer></script>
                    <script src="../assets/js/optional/isotope.pkgd.min.js" defer></script>
                    <script src="../assets/js/jquery.appear.min.js" defer></script>
                    <script src="../assets/js/plugins.min.js" defer />
                    <script
                         src="https://cdnjs.cloudflare.com/ajax/libs/jquery-appear/0.1/jquery.appear.min.js"
                         async
                    />
               </Head>
               <SessionProvider>
                    <Providers>
                         <ReactQueryProviders>
                              <StyledJsxRegistry>
                                   <AppProvider>
                                        {children}
                                        <Toaster toastOptions={{ className: "tw-text-2xl" }} />
                                   </AppProvider>
                              </StyledJsxRegistry>
                         </ReactQueryProviders>
                    </Providers>
               </SessionProvider>
          </html>
     );
}
