import { Footer, PageNavigator } from "#components";
import { notFound } from "next/navigation";

export default async function UserHomePage({ params }) {
  const { page, username } = await params;

  if (!username) notFound();

  return (
    <>
      <PageNavigator page={page} />
      <Footer />
    </>
  );
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const userData = { name: "Danishan", bio: "A passionate developer" }; // TODO: Fetch user data based on username
  const { page } = await params;
  const pageName = page.charAt(0).toUpperCase() + page.slice(1);

  return {
    title: `${pageName} - ${userData.name}`,
    description: userData.bio || `Portfolio of ${userData.name}`,
  };
}
