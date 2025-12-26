"use client";

import { useEffect } from "react";
import { useDynamicContent } from "#layouts";
import { notFound } from "next/navigation";
import { user } from "./user.js";

export default function RouteFilter() {
  
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
