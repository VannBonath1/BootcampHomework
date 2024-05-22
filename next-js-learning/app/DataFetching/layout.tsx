import React, { ReactNode } from "react";
import Header from "./Component/Header";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
};

export default Layout;
