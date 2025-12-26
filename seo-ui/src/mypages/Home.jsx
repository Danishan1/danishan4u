"use client";

import { HeroSection, HomePage } from "#components";

import { useHeroDetails, ENK } from "core-ui";

import { Loading } from "#components";

export const Home = () => {
  const { config, loading, error } = useHeroDetails(ENK.home);

  if (loading) return <Loading/>;

  return (
    <>
      <HeroSection config={config} />
      <HomePage />
    </>
  );
};
