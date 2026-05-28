import "./globals.css";

export const metadata = {
  title: "PlayVerse",
  description: "Next generation streaming platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}