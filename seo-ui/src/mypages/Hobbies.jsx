"use client";

import { HeroSection } from "#components";

import { useHeroDetails, ENK } from "core-ui";

import { Loading } from "#components";

export const Hobbies = () => {
  const { config, loading, error } = useHeroDetails(ENK.hobbies);

  if (loading) return <Loading/>;

  return (
    <>
      <HeroSection config={config} />
    </>
  );
};
