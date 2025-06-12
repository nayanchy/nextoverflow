// import { auth } from "@/auth";
import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilter from "@/components/filters/HomeFilter";
import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

import Link from "next/link";

interface SearchParams {
  searchParams: Promise<{ [key: string]: string }>;
}

const questions = [
  {
    _id: "1",
    title: "How to use Next.js?",
    description: "Next.js is a React framework for building web applications",
    tags: [
      {
        _id: "1",
        name: "Next.js",
        slug: "nextjs",
      },
      {
        _id: "2",
        name: "React",
        slug: "react",
      },
    ],
    author: {
      _id: "1",
      name: "John Doe",
      image: "/images/avatar.png",
    },
    upvotes: 10,
    views: 100,
    answers: 5,
    createdAt: new Date(),
  },
  {
    _id: "2",
    title: "How to use React?",
    description: "React is a JavaScript library for building user interfaces",
    tags: [
      {
        _id: "1",
        name: "React",
        slug: "react",
      },
    ],
    author: {
      _id: "1",
      name: "John Doe",
      image: "/images/avatar.png",
    },
    upvotes: 5,
    views: 50,
    answers: 3,
    createdAt: new Date(),
  },
];

const Home = async ({ searchParams }: SearchParams) => {
  const { query = "", filter = "" } = await searchParams;
  const filteredQuestions = questions.filter((question) => {
    const matchedQuery = question.title
      .toLowerCase()
      .includes(query.toLowerCase());
    const matchedFilter = filter
      ? question.tags.some((tag) => tag.slug === filter)
      : true;
    return matchedQuery && matchedFilter;
  });

  // const session = await auth();
  // console.log(session);

  return (
    <>
      <section className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Button
          className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900"
          asChild
        >
          <Link href={ROUTES.ASK_QUESTION}>Ask a question</Link>
        </Button>
      </section>
      <section className="mt-11">
        <LocalSearch
          imgSrc="/icons/search.svg"
          placeholder="Search questions..."
          otherClasses="flex-1"
          route="/"
        />
      </section>
      <HomeFilter />
      <div className="mt-10 flex w-full flex-col gap-6">
        {filteredQuestions.map((question) => (
          <QuestionCard key={question._id} question={question} />
        ))}
      </div>
    </>
  );
};
export default Home;
