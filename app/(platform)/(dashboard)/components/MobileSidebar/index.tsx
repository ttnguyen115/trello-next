"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent } from "@/components/ui/sheet";
import { useMobileSidebar } from "@/hooks/useMobileSidebar";
import DashboardSidebar from "@/app/(platform)/(dashboard)/components/DashboardSidebar";

function MobileSidebar() {
  const pathname = usePathname();
  const onOpen = useMobileSidebar((state) => state.onOpen);
  const onClose = useMobileSidebar((state) => state.onClose);
  const isOpen = useMobileSidebar((state) => state.isOpen);
  const [isMounted, setIsMounted] = React.useState<boolean>(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  React.useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  if (!isMounted) return null;

  return (
    <>
      <Button
        onClick={onOpen}
        className="block md:hidden mr-2"
        variant="ghost"
        size="sm"
      >
        <Menu className="h-4 w-4" />
        <Sheet open={isOpen} onOpenChange={onClose}>
          <SheetContent side="left" className="p-2 pt-10">
            <DashboardSidebar storageKey="t-sidebar-mobile-state" />
          </SheetContent>
        </Sheet>
      </Button>
    </>
  );
}

export default MobileSidebar;
