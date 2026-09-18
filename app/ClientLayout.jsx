"use client";

import SmoothScrollProvider from "../components/SmoothScrollProvider";

const ClientLayout = ({ children }) => (
  <SmoothScrollProvider>{children}</SmoothScrollProvider>
);

export default ClientLayout;
