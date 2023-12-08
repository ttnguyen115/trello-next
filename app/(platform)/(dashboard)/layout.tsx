import React from "react";
import DashboardNavbar from "@/app/(platform)/(dashboard)/components/DashboardNavbar";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full">
      <DashboardNavbar />
      {children}
    </div>
  );
}

export default DashboardLayout;
