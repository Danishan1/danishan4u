import { PageNavigator } from "#components";
import { getMetaPerPage } from "#utils";

export default async function UserHomePage() {
  return (
    <>
      <PageNavigator page={"home"} />
    </>
  );
}

export async function generateMetadata({ params }) {
  const { page } = await params;
  const meta = await getMetaPerPage(page);

  return meta;
}
