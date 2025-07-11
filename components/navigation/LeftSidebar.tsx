import React from "react";
import NavLinks from "./navbar/NavLinks";
import Link from "next/link";
import { Button } from "../ui/button";
import ROUTES from "@/constants/routes";
import Image from "next/image";

const LeftSidebar = () => {
  return (
    <section className="custom-scrollbar background-light900_dark200 light-border sticky left-0 top-0 h-screen flex flex-col justify-between overflow-y-auto border-r p-6 pt-36 shadow-light300 dark:shadow-none max-sm:hidden lg:w-[266px]">
      <div className="flex flex-1 flex-col gap-6">
        <NavLinks />
      </div>
      <div className="flex flex-col gap-3">
        <Button
          className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3"
          asChild
        >
          <Link href={ROUTES.SIGNIN}>
            <Image
              src="/icons/account.svg"
              alt="Sign In"
              width={20}
              height={20}
              className="invert-colors lg:hidden"
            />
            <span className="primary-text-gradient max-lg:hidden">Sign In</span>
          </Link>
        </Button>

        <Button
          asChild
          className="small-medium btn-tertiary light-border-2 text-dark400_light900 min-h-[41px] w-full rounded-lg border px-4 py-3 shadow-none"
        >
          <Link href={ROUTES.SIGNUP}>
            <Image
              src="/icons/sign-up.svg"
              alt="Sign In"
              width={20}
              height={20}
              className="invert-colors lg:hidden"
            />
            <span className="max-lg:hidden">Sign Up</span>
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default LeftSidebar;
