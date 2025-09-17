import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <>
      <Header />
      <div className=" flex justify-center h-screen " >
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
