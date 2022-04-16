import React from "react";
import { Header } from "@/components/app";

const MainLayout: React.FC = (props) => {
  const { children } = props;
  return (
    <div className="bg-slate-50 h-screen">
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
