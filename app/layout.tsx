import type { Metadata } from "next";

import "./globals.css";
import { FontClassNames } from "./fonts";

export function generateViewport({ params }: any) {
  return {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  };
}

export const metadata: Metadata = {
  title: "mindeating",

  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="min-h-full">
      <body className={" h-full flex justify-center bg-[#c1f1c1] min-h-full  "}>
        <div className={`${FontClassNames} min-[500px]:max-w-[420px] w-full min-h-screen h-auto bg-white px-6 `}>{children}</div>
      </body>
    </html>
  );
}
