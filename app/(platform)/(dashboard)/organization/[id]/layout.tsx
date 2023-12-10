import React from "react";

import { auth } from "@clerk/nextjs";
import { startCase } from "lodash";

import OrgControl from "@/app/(platform)/(dashboard)/organization/[id]/components/org-control";

export async function generateMetadata() {
  const { orgSlug } = auth();

  return {
    title: startCase(orgSlug || "organization"),
  };
}

function OrganizationIdLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <OrgControl />
      {children}
    </>
  );
}

export default OrganizationIdLayout;
