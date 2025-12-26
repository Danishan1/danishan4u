"use client";

import { HeroSection } from "#components";

import { useHeroDetails, ENK } from "core-ui";

import { Loading } from "#components";

export const SocialProfiles = () => {
  const { config, loading, error } = useHeroDetails(ENK.social);

  if (loading) return <Loading/>;

  return (
    <>
      <HeroSection config={config} />
    </>
  );
};
