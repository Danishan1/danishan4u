"use client";

import {
  ContentRender,
  ContentRenderList,
  HeroSection,
  ThinkingDimention,
} from "#components";
import { MyHooks, MyPages } from "#widgets";
import { useHeroDetails, ENK, useSkills } from "core-ui";

import { Loading } from "#components";
const { useScrollPoints } = MyHooks;

export const Skills = () => {
  const { config, loading, error } = useHeroDetails(ENK.skill);
  const {
    config: skillConfig,
    loading: skillLoading,
    error: skillError,
  } = useSkills();

  const { containerRef, registerPoint, scrollTo } = useScrollPoints();

  if (loading && skillLoading) return <Loading/>;

  return (
    <section ref={containerRef}>
      <HeroSection config={config} />
      <ThinkingDimention
        content={skillConfig.thinkingDimension}
        metaInfo={skillConfig.metaInfo.thinkingDimension}
      />
      <ContentRender
        content={skillConfig.skillset}
        metaInfo={skillConfig.metaInfo.skillset}
        registerPoint={registerPoint}
        forWhat={"skill"}
      />
      <ContentRenderList
        skills={skillConfig.sidebar}
        buttonLabel={skillConfig.metaInfo.skillset.title}
        scrollTo={scrollTo}
      />
    </section>
  );
};
