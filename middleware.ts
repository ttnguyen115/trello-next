import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { AppRoutes } from "@/shared";
import { NextResponse } from "next/server";

export default authMiddleware({
  publicRoutes: ["/"],
  afterAuth({ userId, isPublicRoute, orgId }, req) {
    if (userId && isPublicRoute) {
      let path = AppRoutes.ORGANIZATION_SELECT;
      if (orgId) path = `${AppRoutes.ORGANIZATION}/${orgId}`;
      const orgSelection = new URL(path, req.url);
      return NextResponse.redirect(orgSelection);
    }

    if (!userId && !isPublicRoute) {
      return redirectToSignIn({ returnBackUrl: req.url });
    }

    if (
      userId &&
      !orgId &&
      req.nextUrl.pathname !== AppRoutes.ORGANIZATION_SELECT
    ) {
      const orgSelection = new URL(AppRoutes.ORGANIZATION_SELECT, req.url);
      return NextResponse.redirect(orgSelection);
    }
  },
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
