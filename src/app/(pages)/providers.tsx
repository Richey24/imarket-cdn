"use client";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
     return (
          <CacheProvider>
               <ThemeProvider>{/* <ChakraProvider>{children}</ChakraProvider> */}</ThemeProvider>
          </CacheProvider>
     );
}
