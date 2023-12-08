import Link from "next/link";
import { Medal } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { headingFont, textFont, AppRoutes } from "@/shared";

import marketingTexts from "@/mocks/marketingTexts.json";

function MarketingPage() {
  return (
    <div className="flex items-center justify-center flex-col">
      <div
        className={cn(
          "flex items-center justify-center flex-col",
          headingFont.className,
        )}
      >
        <div className="mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
          <Medal className="h-6 w-6 mr-2" />
          {marketingTexts.medalText}
        </div>
        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
          {marketingTexts.primary}
        </h1>
        <div className="text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded pb-4 w-fit">
          {marketingTexts.secondary}
        </div>
      </div>
      <div
        className={cn(
          "text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl" +
            " text-center mx-auto",
          textFont.className,
        )}
      >
        {marketingTexts.description}
      </div>
      <Button className="mt-6" size="lg" asChild>
        <Link href={AppRoutes.SIGN_UP}>{marketingTexts.buttonText}</Link>
      </Button>
    </div>
  );
}

export default MarketingPage;
