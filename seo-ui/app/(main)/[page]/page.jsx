import { Footer, PageNavigator } from "#components";
import { getMetaPerPage } from "#utils";

export default async function UserHomePage({ params }) {
  const { page } = await params;

  return (
    <>
      <PageNavigator page={page} />
      <Footer />
    </>
  );
}

export async function generateMetadata({ params }) {
  const { page } = await params;
  const meta = await getMetaPerPage(page);

  return meta;
}
