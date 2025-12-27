import { getMetaPerPage } from "#utils";

export default function BlogPage() {
  return (
    <section
      style={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Choose a Blog from Sidebar </h1>
    </section>
  );
}
export async function generateMetadata({ params }) {
  const meta = await getMetaPerPage("blog");

  return meta;
}
