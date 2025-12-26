"use client";

import { HeroSection } from "#components";
import { Loading } from "#components";
import { useHeroDetails, ENK } from "core-ui";

export const CaseStudy = () => {
  const { config, loading, error } = useHeroDetails(ENK.caseStudy);

  if (loading) return <Loading />;

  return (
    <>
      <HeroSection config={config} />
    </>
  );
};
