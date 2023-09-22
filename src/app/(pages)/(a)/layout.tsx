"use client";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
     return (
          <html lang="en">
               {/* <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
               </Head> */}

               <body className={"homepage relative"}>{children}</body>
          </html>
     );
}
