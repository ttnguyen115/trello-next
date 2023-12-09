"use client";

import { useParams } from "next/navigation";
import { useOrganizationList } from "@clerk/nextjs";
import React from "react";

function OrgControl() {
  const params = useParams();
  const { setActive } = useOrganizationList();

  React.useEffect(() => {
    if (!setActive) return;
    setActive({
      organization: params.id as string,
    });
  }, [setActive, params.id]);

  return null;
}

export default OrgControl;
