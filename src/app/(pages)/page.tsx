"use client";
import { AppContext } from "@/appProvider";
import { templateConfig } from "@/templates/config";
import Image from "next/image";
import { useContext } from "react";

export default function Home() {
     const { site } = useContext(AppContext);
     const Headers = templateConfig.headers[site.theme.theme as string];
const Footer = templateConfig.headers[site.theme.theme as string];
     return (
          <>
               <Headers />
          </>
     );
}
