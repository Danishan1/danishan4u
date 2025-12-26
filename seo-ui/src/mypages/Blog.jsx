"use client";

import { BlogsContainer, HeroSection } from "#components";
import { Loading } from "#components";
import { useHeroDetails, ENK, useBlogs } from "core-ui";

export const Blog = () => {
  const { config, loading, error } = useHeroDetails(ENK.blog);

  if (loading) return <Loading />;

  return (
    <>
      <HeroSection config={config} />
      <BlogsContainer />
    </>
  );
};
