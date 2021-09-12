import React from "react";
import ReactMde from "react-mde";
import "react-mde/lib/styles/css/react-mde-all.css";
import ReactMarkdown from "react-markdown";
///import remarkGfm from 'remark-gfm'
///import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
///import {dark} from 'react-syntax-highlighter/dist/esm/styles/prism'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { anOldHope } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function App() {
  const [value, setValue] = React.useState("**Hello world!!!**");
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div style={{ width: "50%", marginRight: 10 }}>
        <ReactMde value={value} onChange={setValue} />
      </div>
      <div style={{ width: "60%" }}>
        Preview
        
        <ReactMarkdown
    children={value}
    components={{
      code({node, inline, className, children, ...props}) {
        
        const match = /language-(\w+)/.exec(className || '')
        return !inline && match ? (
          
          <SyntaxHighlighter
            children={String(children).replace(/\n$/, '')}
            style={anOldHope}
            language={match[1]}
            PreTag="div"
            {...props}
          />
        ) : (
          <code className={className} {...props}>
            {children}
          </code>
        )
      }
    }}
  />

      </div>



    </div>
  );
}