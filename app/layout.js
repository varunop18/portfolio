import "../styles/globals.css";
import "../styles/fonts.css";
import ClientLayout from "./ClientLayout";

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <link rel="preload" as="font" type="font/woff2" href="/fonts/EudoxusSans-Regular.woff2" crossOrigin="anonymous" />
      <link rel="preload" as="font" type="font/woff2" href="/fonts/EudoxusSans-Medium.woff2" crossOrigin="anonymous" />
      <link rel="preload" as="font" type="font/woff2" href="/fonts/EudoxusSans-Bold.woff2" crossOrigin="anonymous" />
      <link rel="preload" as="font" type="font/woff2" href="/fonts/EudoxusSans-ExtraBold.woff2" crossOrigin="anonymous" />
      <title>Varun Rathod — Developer Portfolio</title>
      <meta
        name="description"
        content="Portfolio of Varun Rathod — Software Developer, Full-Stack Builder, and Computer Programming & Analysis student at Algonquin College."
      />
      <meta name="author" content="Varun Rathod" />
      <meta name="theme-color" content="#1A232E" />
      <meta
        property="og:title"
        content="Varun Rathod — Developer Portfolio"
      />
      <meta
        property="og:description"
        content="Software Developer, Full-Stack Builder, and Computer Programming & Analysis student at Algonquin College."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://varunop18.github.io" />
    </head>
    <body>
      <ClientLayout>
        <main>{children}</main>
      </ClientLayout>
    </body>
  </html>
);

export default RootLayout;
