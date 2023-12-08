import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { headingFont, AppRoutes } from "@/shared";

function Logo() {
  return (
    <Link href={AppRoutes.HOME_PAGE}>
      <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
        <Image src="/logo.svg" alt="Logo" height={30} width={30} />
        <p className={cn("text-lg text-neutral-700", headingFont.className)}>
          Taskify
        </p>
      </div>
    </Link>
  );
}

export default Logo;
