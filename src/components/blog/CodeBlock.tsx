import React, { useEffect } from 'react';
import { twMerge } from 'tailwind-merge';
import Prism from 'prismjs';
import 'dracula-prism/dist/css/dracula-prism.min.css';

type CodeBlockProps = {
  children: React.ReactNode;
  className?: string;
};

const CodeBlock: React.FC<CodeBlockProps> = ({ children, className = '' }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const language = className.replace(/language-/, '');
  return (
    <pre className={twMerge(className, '!m-0 !p-0')}>
      <code className={`language-${language}`}>{children}</code>
    </pre>
  );
};

export default CodeBlock;
