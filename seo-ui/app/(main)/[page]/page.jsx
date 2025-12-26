import { Footer, PageNavigator } from "#components";
import { user } from "../user.js";

export default async function UserHomePage({ params }) {
  const { page } = await params;

  return (
    <>
      <PageNavigator page={page} />
      <Footer />
    </>
  );
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const userData = user;
  const { page } = await params;
  const pageName = page.charAt(0).toUpperCase() + page.slice(1);

  return {
    title: `${pageName} - ${userData.name}`,
    description: userData.bio || `Portfolio of ${userData.name}`,
  };
}
