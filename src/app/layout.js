import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import TopLogo from "@/app/TopLogo";


export const metadata = {
  title: "design-hu",
};

export const viewport = {
    width: "720",
    maximumScale: 1,
    userScalable: false,
    // Also supported by less commonly used
    // interactiveWidget: 'resizes-visual',
};

const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-space',
})



export default function Layout({ children }) {
  return (
    <html lang="en"  className={`${spaceGrotesk.variable}`}>
      <body className={"flex h-full w-full"}>
      <TopLogo/>
        {children}
      </body>
    </html>

  );
}
