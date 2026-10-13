import { Outlet } from "react-router";

import { FloatingNavigation } from "@widgets/floating-navigation";

const RootLayout = () => {
  return (
    <div>
      <Outlet />
      <FloatingNavigation />
    </div>
  );
};

export default RootLayout;
