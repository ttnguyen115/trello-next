import React from "react";
import Footer from "@/app/(marketing)/components/Footer";
import MarketingNavbar from "@/app/(marketing)/components/MarketingNavbar";

function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full bg-slate-100">
      <MarketingNavbar />
      <main className="pt-40 pb-20 bg-slate-100">{children}</main>
      <Footer />
    </div>
  );
}

export default MarketingLayout;
