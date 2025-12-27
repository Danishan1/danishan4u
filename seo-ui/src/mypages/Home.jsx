"use client";

import { HeroSection, HomePage, PortfolioHome } from "#components";

import { useHeroDetails, ENK } from "core-ui";

import { Loading } from "#components";

export const Home = () => {
  const { config, loading, error } = useHeroDetails(ENK.home);

  if (loading) return <Loading />;

  return (
    <>
      <PortfolioHome />
    </>
  );
};
