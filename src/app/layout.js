import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import TopLogo from "@/app/TopLogo";
import {Noto_Sans_JP} from "next/font/google";

export const metadata = {
  title: "design-hu",
};

export const viewport = {
    width: "device-width",
    initialScale: 1,
};

const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-space',
})

const notoSans = Noto_Sans_JP({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-space',
})



export default function Layout({ children }) {
  return (
    <html lang="en"  className={`${notoSans.variable}`}>
    <body className={"flex h-full w-full"}>
    <TopLogo/>
        {children}
      </body>
    </html>
  );
}
