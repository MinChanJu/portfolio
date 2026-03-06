import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import { Home } from "@pages/home";

import { Footer } from "@widgets/footer";
import { Header } from "@widgets/header";

import usePageTitle from "../model/usePageTitle";

const Layout = () => {
  const location = useLocation();
  usePageTitle();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const originalTitle = document.title;
    const handleBefore = () => {
      document.title = "MinChanJu's Portfolio";
    };
    const handleAfter = () => {
      document.title = originalTitle;
    };
    window.addEventListener("beforeprint", handleBefore);
    window.addEventListener("afterprint", handleAfter);
    return () => {
      window.removeEventListener("beforeprint", handleBefore);
      window.removeEventListener("afterprint", handleAfter);
    };
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Header />
      <main id="screen-content" className="mx-auto w-full max-w-5xl flex-1 p-4 md:p-8 print:hidden">
        <Outlet />
      </main>
      <Footer />

      <div id="print-content" className="hidden bg-white print:block">
        <Home />
      </div>
    </div>
  );
};

export default Layout;
