"use client";

import { getNavItems } from "core-ui";
import { notFound } from "next/navigation";

const menuItems = getNavItems();

export default function RouteFilter({ page }) {
  const validRoute = menuItems.flatMap((item) =>
    item.children ? item.children.map((ch) => ch.route) : [item.route]
  );

  if (!validRoute.includes(`/${page}`)) return notFound();

  return null;
}
