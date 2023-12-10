import { Separator } from "@/components/ui/separator";

import Info from "@/app/(platform)/(dashboard)/organization/[id]/components/info";
import BoardList from "@/app/(platform)/(dashboard)/organization/[id]/components/board-list";

async function OrganizationIdPage() {
  return (
    <div className="w-full mb-20">
      <Info />
      <Separator className="my-4" />
      <div className="px-2 md:px-4">
        <BoardList />
      </div>
    </div>
  );
}

export default OrganizationIdPage;
