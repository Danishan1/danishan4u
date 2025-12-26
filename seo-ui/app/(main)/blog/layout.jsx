import { BlogsContainer, Footer } from "#components";
import { apiCaller, getEndpoint } from "#utils";

export default async function BlogDynamicPage({ params, children }) {
  const endpoint = getEndpoint(`public/posts/blog-list`);
  const response = await apiCaller({ endpoint });

  return (
    <>
      <BlogsContainer sidebar={response.data}>{children}</BlogsContainer>
      <Footer />
    </>
  );
}
