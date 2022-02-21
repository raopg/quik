import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

export const Editor: React.VFC = () => {
  const [code, setCode] = useState("// Get started here");

  return (
    <CodeMirror
      value={code}
      minHeight="100%"
      minWidth="100%"
      extensions={[javascript({ jsx: true })]}
      onChange={(value, viewUpdate) => {
        setCode(value);
      }}
    ></CodeMirror>
  );
};
