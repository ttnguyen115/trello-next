"use client";

import React from "react";
import CardModal from "@/components/modals/cardModal";

function ModalProvider() {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <CardModal />
    </>
  );
}

export default CardModal;
