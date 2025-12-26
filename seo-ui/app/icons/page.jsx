"use client";

import { MyIcons, MyShowcase } from "#widgets";
const { IconGallery, CardGallery } = MyShowcase;

export default function Page() {
  return (
    <div style={{ overflowY: "auto", height: "100vh" }}>
      <IconGallery />
      <CardGallery />
    </div>
  );
}
