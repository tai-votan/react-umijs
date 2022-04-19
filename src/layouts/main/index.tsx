import React from "react";
import type { Location } from "umi";
import { Header } from "@/components/app";
import ROUTES from "@/../config/routes.const";

interface Props {
  location: Location;
}

const MainLayout: React.FC<Props> = (props) => {
  const { children, location } = props;
  const routesApp = Object.values(ROUTES);

  if (!routesApp.includes(location.pathname)) {
    return <>{children}</>;
  }
  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <div className={"container mx-auto mt-4 px-2"}>
        <div className="grid grid-cols-8 gap-x-4 items-center">
          <div className="col-span-8 xl:col-span-1" />
          <div className="col-span-8 xl:col-span-5">{children}</div>
          <div className="col-span-8 xl:col-span-2" />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
