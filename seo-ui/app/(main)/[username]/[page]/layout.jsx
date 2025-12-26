import RouteFilter from "./RouteFilter.jsx";

export default async function MainLayout({ children, params }) {
  const { page } = await params;

  return (
    <>
      <RouteFilter page={page} />

      {children}
    </>
  );
}
