import { Space_Grotesk } from "next/font/google";
import "./globals.css";


export const metadata = {
  title: "design-hu",
};

const space = Space_Grotesk({
    subsets: ['latin'],
})

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={space.className}>

        {children}
      </body>
    </html>

  );
}
