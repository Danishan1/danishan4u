"use client";

import { ContentRender, ContentRenderList, HeroSection } from "#components";
import { MyHooks, MyPages } from "#widgets";
import { useHeroDetails, ENK, useProjects } from "core-ui";

import { Loading } from "#components";
const { useScrollPoints } = MyHooks;

export const Projects = () => {
  const { config, loading, error } = useHeroDetails(ENK.project);
  const {
    config: prConfig,
    loading: prLoading,
    error: prError,
  } = useProjects();

  const { containerRef, registerPoint, scrollTo } = useScrollPoints();

  if (loading && prLoading) return <Loading/>;

  return (
    <section ref={containerRef}>
      <HeroSection config={config} />
      <ContentRender
        content={prConfig.projectsSet}
        metaInfo={prConfig.metaInfo.projectsSet}
        registerPoint={registerPoint}
        forWhat={"projects"}
      />
      <ContentRenderList
        skills={prConfig.sidebar}
        buttonLabel={prConfig.metaInfo.projectsSet?.title}
        scrollTo={scrollTo}
      />
    </section>
  );
};
