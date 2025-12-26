"use client";

import { HeroSection } from "#components";

import { useHeroDetails, ENK } from "core-ui";

import { Loading } from "#components";

export const Talks = () => {
  const { config, loading, error } = useHeroDetails(ENK.talk);

  if (loading) return <Loading/>;

  return (
    <>
      <HeroSection config={config} />
    </>
  );
};
