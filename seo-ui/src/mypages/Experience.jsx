"use client";

import { ContentRender, ContentRenderList, HeroSection } from "#components";
import { MyHooks, MyPages } from "#widgets";
import { useHeroDetails, ENK, useExperiences } from "core-ui";

import { Loading } from "#components";
const { useScrollPoints } = MyHooks;

export const Expericence = () => {
  const { config, loading, error } = useHeroDetails(ENK.experience);
  const {
    config: exConfig,
    loading: exLoading,
    error: exError,
  } = useExperiences();

  const { containerRef, registerPoint, scrollTo } = useScrollPoints();

  if (loading && exLoading) return <Loading/>;

  return (
    <section ref={containerRef}>
      <HeroSection config={config} />
      <ContentRender
        content={exConfig.experienceSet}
        metaInfo={exConfig.metaInfo.experienceSet}
        registerPoint={registerPoint}
        forWhat={"experience"}
      />
      {/* <ContentRenderList
        skills={exConfig.sidebar}
        buttonLabel={exConfig.metaInfo.experienceSet.title}
        scrollTo={scrollTo}
      /> */}
    </section>
  );
};
