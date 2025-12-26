import { PageNavigator } from "#components";
import { user } from "./user.js";

export default async function UserHomePage() {
  return (
    <>
      <PageNavigator page={"home"} />
    </>
  );
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const userData = user;

  if (!userData) {
    return {
      title: "User Not Found",
    };
  }

  return {
    title: `${userData.name} - Portfolio`,
    description: userData.bio || `Portfolio of ${userData.name}`,
  };
}
