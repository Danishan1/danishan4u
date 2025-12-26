"use client";

import { HeroSection } from "#components";
import { Loading } from "#components";
import { useHeroDetails, ENK } from "core-ui";

export const About = () => {
  const { config, loading, error } = useHeroDetails(ENK.about);

  if (loading) return <Loading />;

  return (
    <>
      <HeroSection config={config} />
    </>
  );
};
