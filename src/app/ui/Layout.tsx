import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

import { Footer } from "@widgets/footer";
import { Header } from "@widgets/header";
import { Sidebar } from "@widgets/sidebar";

import data from "@shared/assets/data.json";

import usePageTitle from "../model/usePageTitle";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();
  usePageTitle({ projects: data.projects });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div>
      <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} projects={data.projects} />
      <div className={`transition-all duration-300 ${isSidebarOpen ? "ml-75 w-[calc(100%-300px)]" : "ml-0 w-full"}`}>
        <Header />

        <main className="mx-12.5">
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Layout;
