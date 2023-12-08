import { OrganizationList } from "@clerk/nextjs";
import { AppRoutes } from "@/shared";

function CreateOrganizationPage() {
  return (
    <OrganizationList
      hidePersonal
      afterSelectOrganizationUrl={AppRoutes.ORGANIZATION_BY_ID}
      afterCreateOrganizationUrl={AppRoutes.ORGANIZATION_BY_ID}
    />
  );
}

export default CreateOrganizationPage;
