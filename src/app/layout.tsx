/* eslint-disable @next/next/no-css-tags */
"use client";
import AppProvider from "@/appProvider";
import { Providers } from "@/redux/provider";
import { Toaster } from "react-hot-toast";
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
import "../assets/css/bootstrap.min.css";
// import "../assets/css/demo13.min.css";
// import "../assets/css/demo1.min.css";
// import "../assets/css/demo2.min.css";
import "../assets/css/demo20.min.css";
 import "../assets/css/demo21.min.css";
import "../assets/vendor/fontawesome-free/css/all.min.css";
import "../assets/vendor/simple-line-icons/css/simple-line-icons.min.css";
import "../assets/js/webfont";
import "bootstrap/dist/css/bootstrap.min.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
     return (
          <html lang="en">
               <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <script
                         async
                         src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js"
                    ></script>
                    <script src="../assets/js/main.min.js" defer></script>
                    <script src="../assets/js/jquery.min.js" defer />
                    <script src="../assets/js/bootstrap.bundle.min.js" defer />
                    <script src="../assets/js/plugins.min.js" defer />
                    <script
                         src="https://cdnjs.cloudflare.com/ajax/libs/jquery-appear/0.1/jquery.appear.min.js"
                         async
                    />
               </Head>

               {/* <Script
                    src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
                    crossOrigin="anonymous"
               /> */}
               <SessionProvider>
                    <Providers>
                         <ReactQueryProviders>
                              <AppProvider>
                                   {children}
                                   <Toaster />
                              </AppProvider>
                         </ReactQueryProviders>
                    </Providers>
               </SessionProvider>
          </html>
     );
}
