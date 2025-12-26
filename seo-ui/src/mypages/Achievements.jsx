"use client";

import { HeroSection } from "#components";
import { Loading } from "#components";
import { useHeroDetails, ENK } from "core-ui";

export const Achievements = () => {
  const { config, loading, error } = useHeroDetails(ENK.achievement);

  if (loading) return <Loading />;

  return (
    <>
      <HeroSection config={config} />
    </>
  );
};
