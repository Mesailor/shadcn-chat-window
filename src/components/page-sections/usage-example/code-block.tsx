import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CopyButton } from "@/components/common/copy-button";

export function CodeBlock({ codeString }: { codeString: string }) {
  return (
    <div className="relative">
      <CopyButton className="absolute top-2 right-2 z-10" text={codeString} />
      <SyntaxHighlighter
        language="jsx"
        style={oneLight}
        customStyle={{
          borderRadius: "8px",
          backgroundColor: "var(--sidebar)",
        }}
        showLineNumbers
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
}
