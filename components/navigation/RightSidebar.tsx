import ROUTES from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import TagCard from "../cards/TagCard";

const hotQuestions = [
  {
    id: "1",
    title: "What is React?",
  },
  {
    id: "2",
    title: "What is Next.js?",
  },
  {
    id: "3",
    title: "What is Tailwind CSS?",
  },
  {
    id: "4",
    title: "What is TypeScript?",
  },
  {
    id: "5",
    title: "What is Prisma?",
  },
];

const popularTags = [
  {
    _id: "1",
    name: "react",
    questions: 21345,
  },
  {
    _id: "2",
    name: "nextjs",
    questions: 5543,
  },
  {
    _id: "3",
    name: "tailwindcss",
    questions: 4312,
  },
  {
    _id: "4",
    name: "typescript",
    questions: 23123,
  },
  {
    _id: "5",
    name: "nodejs",
    questions: 23989,
  },
];

const RightSidebar = () => {
  return (
    <section className="pt-36 custom-scrollbar background-light900_dark200 light-border sticky right-0 top-0 flex h-screen w-[350px] flex-col gap-6 overflow-y-auto border-l p-6 shadow-light-300 dark:shadow-none max-xl:hidden">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map(({ id, title }) => (
            <Link
              href={ROUTES.PROFILE(id)}
              key={id}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">{title}</p>
              <Image
                src="/icons/chevron-right.svg"
                alt="right"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map(({ _id, name, questions }) => (
            <TagCard
              key={_id}
              _id={_id}
              name={name}
              questions={questions}
              showCount
              compact
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
