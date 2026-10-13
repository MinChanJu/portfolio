import { Outlet } from "react-router";

import { Footer } from "@widgets/footer";
import { Header } from "@widgets/header";

const AppLayout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="mx-auto w-full max-w-5xl flex-1 p-3 md:p-5 print:p-0">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
