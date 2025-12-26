"use client";

import { useEffect } from "react";
import { getUserInfo } from "core-ui";
import { useDynamicContent } from "#layouts";
import { notFound } from "next/navigation";

export default function RouteFilter({ username }) {
  const user = getUserInfo(username);
  const { setValue, getValue } = useDynamicContent();

  useEffect(() => {
    setValue("userInfo", user);
  }, []);

  if (!user) return notFound();

  return null;
}

export const getMetaInfo = () => {
  return getValue("userInfo");
};
