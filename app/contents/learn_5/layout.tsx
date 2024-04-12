export default function contentsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className="px-3">{children}</main>
    </>
  );
}
