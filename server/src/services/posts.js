import fs from "fs";
import path from "path";

export const getPostBySlug = (slug) => {
  const filePath = path.join(process.cwd(), "src/posts", `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    throw new Error("Post not found");
  }

  const content = fs.readFileSync(filePath, "utf-8");
  return content;
};
