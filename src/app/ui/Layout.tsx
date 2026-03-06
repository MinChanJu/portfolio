import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import { Footer } from "@widgets/footer";
import { Header } from "@widgets/header";

import usePageTitle from "../model/usePageTitle";

const Layout = () => {
  const location = useLocation();
  usePageTitle();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Header />
      <main className="mx-auto w-full max-w-5xl flex-1 px-10 py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
