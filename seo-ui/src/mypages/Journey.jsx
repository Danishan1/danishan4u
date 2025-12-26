"use client";

import { HeroSection } from "#components";
import { MyExtra, MyPages } from "#widgets";
import { useHeroDetails, ENK, useJourneyTimeline } from "core-ui";

import { Loading } from "#components";
const { VerticalTimeline } = MyExtra;

export const Journey = () => {
  const { config, loading, error } = useHeroDetails(ENK.journey);
  const {
    config: tlConfig,
    loading: tlLoading,
    error: tlError,
  } = useJourneyTimeline();

  if (loading || tlLoading) return <Loading/>;

  return (
    <>
      <HeroSection config={config} />
      <VerticalTimeline config={tlConfig} />
    </>
  );
};
