import { useState } from "react";
import Warning from "./Warning";

export default function Textarea({ text, setText }) {
  const [warning, setWarning] = useState("");

  const handleChange = (e) => {
    let newText = e.target.value;
    if (newText.includes("<script>")) {
      setWarning("No script tag allowed!");
      newText = newText.replace("<script>", "");
    } else {
      setWarning("");
    }
    setText(newText);
  };

  return (
    <div className="textarea">
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Enter your text"
        spellCheck="false"
      />
      <Warning message={warning} />
    </div>
  );
}
