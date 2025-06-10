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

export const getTimeStamp = (date: Date) => {
  const now = new Date();
  const secondsAgo = Math.floor((now.getTime() - date.getTime()) / 1000);

  const units = [
    { label: "years", value: 31536000 },
    { label: "months", value: 2592000 },
    { label: "weeks", value: 604800 },
    { label: "days", value: 86400 },
    { label: "hours", value: 3600 },
    { label: "minutes", value: 60 },
    { label: "seconds", value: 1 },
  ];

  for (const unit of units) {
    const interval = Math.floor(secondsAgo / unit.value);
    if (interval >= 1) {
      return `${interval} ${unit.label}${interval > 1 ? "s" : ""} ago`;
    }
  }

  return "just now";
};
