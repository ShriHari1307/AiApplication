import { useEffect, useState, useRef } from "react";
import { getSingletonHighlighter } from "shiki";

interface CodeEditorProps {
  code: string;
}

export default function CodeEditor({ code }: CodeEditorProps) {
  const [highlightedCode, setHighlightedCode] = useState("<pre class='text-sm font-mono text-white'>Loading...</pre>");

  const codeContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let isMounted = true;
    async function highlight() {
      try {
        const highlighter = await getSingletonHighlighter({
          themes: ["github-dark" ],
          langs: ["typescript", "javascript"]
        });
        const html = highlighter.codeToHtml(code, { lang: "typescript", theme: "github-dark" });
        if (isMounted) setHighlightedCode(html);
      } catch (error) {
        console.error("Error highlighting code:", error);
      }
    }
    highlight();

    if (codeContainerRef.current) {
      codeContainerRef.current.scrollTop = 0;
    }

    return () => { isMounted = false; };
  }, [code]);

  return (
    <div className="p-4 font-mono text-sm md:max-h-[45vh] overflow-scroll scroll-container" ref={codeContainerRef}>
      <div dangerouslySetInnerHTML={{ __html: highlightedCode }} />
    </div>
  );
}