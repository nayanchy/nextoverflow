"use client";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { toast } from "sonner";
import { signIn } from "next-auth/react";
import ROUTES from "@/constants/routes";

const SocialAuthForm = () => {
  const handleSignIn = async (provider: "google" | "github") => {
    try {
      await signIn(provider, {
        redirectTo: ROUTES.HOME,
      });
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
    }
  };
  const buttonClass =
    "background-dark400_light900 text-dark200_light800 rounded-2 min-h-12 flex-1 px-4 py-3.5 cursor-pointer";
  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <Button className={buttonClass} onClick={() => handleSignIn("google")}>
        <Image
          src={"/icons/google.svg"}
          alt="Google"
          width={20}
          height={20}
          className="invert-colors mr-2.5 object-contain"
        />
        <span>Sign in with Google</span>
      </Button>
      <Button className={buttonClass} onClick={() => handleSignIn("github")}>
        <Image
          src={"/icons/github.svg"}
          alt="Github"
          width={20}
          height={20}
          className="invert-colors mr-2.5 object-contain"
        />
        Sign in with Github
      </Button>
    </div>
  );
};

export default SocialAuthForm;
