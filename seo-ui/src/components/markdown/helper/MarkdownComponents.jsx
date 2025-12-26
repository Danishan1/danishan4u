import styles from "../css/Markdown.module.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  oneDark,
  coy,
  materialLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { MarkdownTable } from "../jsx/MarkdownTable.jsx";

export const markdownComponents = {
  h1: ({ node, ...props }) => <h1 {...props} className={styles.h1} />,
  h2: ({ node, ...props }) => <h2 {...props} className={styles.h2} />,
  h3: ({ node, ...props }) => <h3 {...props} className={styles.h3} />,

  // Remove default <p> wrapper for code blocks
  p: ({ node, children }) => {
    // Check if paragraph contains a code block (including nested structures)
    const hasCodeBlock = node.children.some(
      (child) =>
        child.type === "code" ||
        (child.tagName === "code" && !child.properties?.inline)
    );

    if (hasCodeBlock) {
      return <>{children}</>;
    }
    return <p className={styles.p}>{children}</p>;
  },

  a: ({ href, children }) => {
    const isInternal = href?.startsWith("#");

    const handleClick = (e) => {
      if (isInternal) {
        e.preventDefault();
        const targetId = href.slice(1);
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          targetEl.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    };

    return (
      <a
        href={href}
        className={styles.link}
        onClick={handleClick}
        target={isInternal ? undefined : "_blank"}
        rel={isInternal ? undefined : "noopener noreferrer"}
      >
        {children}
      </a>
    );
  },

  ul: ({ children }) => <ul className={styles.ul}>{children}</ul>,
  ol: ({ children }) => <ol className={styles.ol}>{children}</ol>,
  li: ({ children }) => <li className={styles.li}>{children}</li>,

  blockquote: ({ children }) => (
    <blockquote className={styles.blockquote}>{children}</blockquote>
  ),

  code: ({ node, className, children, ...props }) => {
    // Alternative check: inline code typically doesn't have className with "language-"
    const match = /language-(\w+)/.exec(className || "");

    // If it has a language specifier, it's definitely a code block
    if (match) {
      return (
        <SyntaxHighlighter language={match[1]} style={materialLight}>
          {String(children).replace(/\n$/, "")}
        </SyntaxHighlighter>
      );
    }

    // Check if children is a simple string (inline) vs has newlines (block)
    const hasNewlines = String(children).includes("\n");

    if (hasNewlines) {
      // Block code without language
      return (
        <pre className={styles.codeBlock}>
          <code className={className}>{children}</code>
        </pre>
      );
    }

    // Inline code
    return <code className={styles.inlineCode}>{children}</code>;
  },

  table: ({ node }) => <MarkdownTable node={node} />,
};
