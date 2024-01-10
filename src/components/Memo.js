import React, { useMemo, useState } from "react";
import findNthPrime from "../utils/primeNumber";

const Memo = () => {
  const [inputText, setInputText] = useState(10);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const prime = useMemo(() => findNthPrime(inputText), [inputText]);

  //   console.log("prime", prime);
  return (
    <div
      className={
        "p-4 m-4 border border-black " + (isDarkTheme && "bg-red-900 ")
      }
    >
      <input
        className={"p-4 m-4 border border-black"}
        type="number"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <h1>
        <span>Prime Number: {prime}</span>
      </h1>
      <button
        className="border bg-black text-white p-2 m-2 rounded-lg"
        onClick={() => setIsDarkTheme(!isDarkTheme)}
      >
        toggle
      </button>
    </div>
  );
};

export default Memo;
