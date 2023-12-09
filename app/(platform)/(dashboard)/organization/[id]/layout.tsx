import React from "react";
import OrgControl from "@/app/(platform)/(dashboard)/organization/[id]/components/org-control";

function OrganizationIdLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <OrgControl />
      {children}
    </>
  );
}

export default OrganizationIdLayout;
