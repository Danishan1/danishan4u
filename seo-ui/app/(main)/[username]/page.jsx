import { PageNavigator } from "#components";
import { notFound } from "next/navigation";

export default async function UserHomePage({ params }) {
  const { username } = await params;
  if (!username) notFound();

  return (
    <>
      <PageNavigator page={"home"} />
    </>
  );
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const userData = { name: "Danishan", bio: "A passionate developer" }; // TODO: Fetch user data based on username

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
