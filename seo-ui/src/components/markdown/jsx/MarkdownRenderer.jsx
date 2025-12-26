"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import styles from "../css/Markdown.module.css";
import { markdownComponents } from "../helper/MarkdownComponents.jsx";

export function MarkdownRenderer({ content }) {
  return (
    <article className={styles.markdown}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeSlug]}
        components={markdownComponents}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
}
