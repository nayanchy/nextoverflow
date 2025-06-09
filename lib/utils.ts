import { techMap } from "@/constants/techMap";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getDeviconClassName = (techName: string) => {
  const normalizedTechName = techName.replace(/[ .]/g, "").toLowerCase();

  if (techMap[normalizedTechName]) {
    if (normalizedTechName === "nextjs") {
      return `${techMap[normalizedTechName]} invert-colors`;
    }
    return `${techMap[normalizedTechName]} colored`;
  } else {
    return "devicon-devicon-plain";
  }
};
