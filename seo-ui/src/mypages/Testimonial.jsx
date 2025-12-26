"use client";

import { HeroSection } from "#components";

import { useHeroDetails, ENK } from "core-ui";

import { Loading } from "#components";

export const Testimonial = () => {
  const { config, loading, error } = useHeroDetails(ENK.testimonial);

  if (loading) return <Loading/>;

  return (
    <>
      <HeroSection config={config} />
    </>
  );
};
