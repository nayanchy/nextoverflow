import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

const Home = async () => {
  const session = await auth();
  console.log(session);

  if (!session) {
    return <></>;
  }

  return (
    <form
      className="px-4 pt-[100px]"
      action={async () => {
        "use server";
        await signOut({
          redirectTo: ROUTES.SIGNIN,
        });
      }}
    >
      <Button type="submit">Log out</Button>
    </form>
  );
};
export default Home;
