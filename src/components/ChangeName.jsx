import { useState } from "react";

const ChangeName = ({ handleSetSearchTerm }) => {
  const [input, setInput] = useState("");

  function changeText() {
    handleSetSearchTerm(input);
    setInput("");
  }

  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={changeText}>Search Post</button>
    </>
  );
};

export default ChangeName;
