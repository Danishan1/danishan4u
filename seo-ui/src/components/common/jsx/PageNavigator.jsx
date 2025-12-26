"use client";

import {
  About,
  Achievements,
  Blog,
  CaseStudy,
  Contact,
  Education,
  Expericence,
  FAQs,
  Gallery,
  Hobbies,
  Home,
  Journey,
  Media,
  Projects,
  Research,
  Services,
  Skills,
  SocialProfiles,
  Talks,
  Testimonial,
  Tools,
  Volunteering,
} from "#mypages";
import { ENK } from "core-ui";

export const PageNavigator = ({ page }) => {
  const _page = `/${page}`;

  const pageMap = {
    [ENK.journey]: Journey,
    [ENK.achievement]: Achievements,
    [ENK.blog]: Blog,
    [ENK.caseStudy]: CaseStudy,
    [ENK.education]: Education,
    [ENK.faqs]: FAQs,
    [ENK.gallery]: Gallery,
    [ENK.hobbies]: Hobbies,
    [ENK.media]: Media,
    [ENK.project]: Projects,
    [ENK.research]: Research,
    [ENK.service]: Services,
    [ENK.skill]: Skills,
    [ENK.social]: SocialProfiles,
    [ENK.talk]: Talks,
    [ENK.tool]: Tools,
    [ENK.volunteering]: Volunteering,
    [ENK.home]: Home,
    [ENK.about]: About,
    [ENK.experience]: Expericence,
    [ENK.testimonial]: Testimonial,
    [ENK.contact]: Contact,
  };

  const empty = () => {
    return <>Invalid Page Name </>;
  };
  const CompRender = pageMap[_page] || empty;

  return <CompRender />;
};
