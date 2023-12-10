import { Plus } from "lucide-react";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";

import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { FormPopover } from "@/components/form/formPopover";

import MobileSidebar from "@/app/(platform)/(dashboard)/components/MobileSidebar";
import { AppRoutes } from "@/shared";

function DashboardNavbar() {
  return (
    <nav className="fixed z-50 top-0 px-4 w-full h-14 border-b shadow-sm bg-white flex items-center">
      <MobileSidebar />
      <div className="flex items-center gap-x-4">
        <div className="hidden md:flex">
          <Logo />
        </div>
        <FormPopover align="start" side="bottom" sideOffset={18}>
          <Button
            variant="primary"
            size="sm"
            className="rounded-sm hidden md:block h-auto py-1.5 px-2"
          >
            Create
          </Button>
        </FormPopover>
        {/* Mobile Navbar */}
        <FormPopover align="start" side="bottom" sideOffset={18}>
          <Button
            variant="primary"
            size="sm"
            className="rounded-sm block md:hidden"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </FormPopover>
        {/* Mobile Navbar */}
      </div>
      <div className="ml-auto flex items-center gap-x-2">
        <OrganizationSwitcher
          hidePersonal
          afterCreateOrganizationUrl={AppRoutes.ORGANIZATION_BY_ID}
          afterSelectOrganizationUrl={AppRoutes.ORGANIZATION_BY_ID}
          afterLeaveOrganizationUrl={AppRoutes.ORGANIZATION_SELECT}
          appearance={{
            elements: {
              rootBox: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              },
            },
          }}
        />
        <UserButton
          afterSignOutUrl={AppRoutes.HOME_PAGE}
          appearance={{
            elements: {
              avatarBox: {
                height: 30,
                width: 30,
              },
            },
          }}
        />
      </div>
    </nav>
  );
}

export default DashboardNavbar;
