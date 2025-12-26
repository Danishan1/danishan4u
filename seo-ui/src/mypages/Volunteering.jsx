"use client";

import { HeroSection } from "#components";

import { useHeroDetails, ENK } from "core-ui";

import { Loading } from "#components";

export const Volunteering = () => {
  const { config, loading, error } = useHeroDetails(ENK.volunteering);

  if (loading) return <Loading/>;

  return (
    <>
      <HeroSection config={config} />
    </>
  );
};
