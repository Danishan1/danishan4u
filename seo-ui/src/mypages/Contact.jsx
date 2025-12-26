"use client";

import { HeroSection, HomePage } from "#components";

import { useHeroDetails, ENK } from "core-ui";

import { Loading } from "#components";

export const Contact = () => {
  const { config, loading, error } = useHeroDetails(ENK.contact);

  if (loading) return <Loading />;

  return (
    <>
      <HeroSection config={config} />
      <HomePage imageSrc="/danishan2.png" />
    </>
  );
};
