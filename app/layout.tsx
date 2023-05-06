import "@fontsource/pt-sans";
import "@fontsource/pt-sans/700.css";
import "./globals.scss"

import { TITLE, DESCRIPTION } from "~/config";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
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
