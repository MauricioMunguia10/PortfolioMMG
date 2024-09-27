import localFont from "next/font/local";
import "./globals.css";

const Sansita = localFont({
  src: "./fonts/Sansita-Regular.ttf",
  variable: "--font-sansita",
  weight: "100 900",
});

export const metadata = {
  title: "Mauricio MG | Portfolio",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${Sansita.variable} `}>{children}</body>
    </html>
  );
}
