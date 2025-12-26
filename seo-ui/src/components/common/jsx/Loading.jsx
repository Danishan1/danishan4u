"use client";

import { MyPages } from "#widgets";

const { Loading: Loading_ } = MyPages;

export const Loading = () => {
  return <Loading_ color="var(--color-primary)" windowHeight="90vh" />;
};
