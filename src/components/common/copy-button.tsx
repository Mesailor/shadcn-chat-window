"use client";

import { CheckIcon, CopyIcon } from "lucide-react";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";

export function CopyButton({
  className,
  text,
}: {
  className?: string;
  text: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (copied) {
      timeout = setTimeout(() => setCopied(false), 2000);
    }
    return () => clearTimeout(timeout);
  }, [copied]);

  return (
    <Button
      variant="ghost"
      size="icon-sm"
      className={className}
      onClick={handleCopy}
    >
      {copied ? <CheckIcon /> : <CopyIcon />}
    </Button>
  );
}
