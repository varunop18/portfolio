import "../styles/globals.css";
import ClientLayout from "./ClientLayout";

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <link rel="preconnect" href="https://stijndv.com" />
      <link
        rel="stylesheet"
        href="https://stijndv.com/fonts/Eudoxus-Sans.css"
      />
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
