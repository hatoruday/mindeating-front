import { FontClassNames } from "@/app/fonts";

export default function contentsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className={`${FontClassNames} font-noto px-3`}>{children}</main>
    </>
  );
}
