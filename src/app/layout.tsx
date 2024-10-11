import type { Metadata } from "next";
import Footer from "@/app/components/Footer/Footer";
import SessionWrapper from "@/app/components/Auth/SessionWrapper";
import "./globals.css";


export const metadata: Metadata = {
  title: "Make You Pixel",
  description: "A world made of pixels",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>

      {/* <!-- Font Awesome --> */}
      <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />

      {/* <!-- Google Fonts --> */}
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&family=Spicy+Rice&display=swap" rel="stylesheet"/>
      </head>
      <SessionWrapper>
        <body
          className="antialiased"
        >
          {children}
          <Footer />
        </body>
      </SessionWrapper>
    </html>
  );
}
