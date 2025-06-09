const ROUTES = {
  HOME: "/",
  SIGNUP: "/sign-up",
  SIGNIN: "/sign-in",
  ACCOUNT: "/account",
  SETTINGS: "/settings",
  PROFILE: (id: string) => `/profile/${id}`,
  TAGS: (id: string) => `/tags/${id}`,
  ASK_QUESTION: "/ask-question",
  QUESTIONS: (id: string) => `/questions/${id}`,
};

export default ROUTES;
