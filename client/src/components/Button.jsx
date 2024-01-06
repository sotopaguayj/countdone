import React from "react";

function Button({ text, type }) {
  return (
    <button type={type} className="bg-teal-600 my-2 cursor-pointer text-center hover:bg-teal-500 text-teal-950 transition-colors font-bold py-2 px-4 rounded-sm">
      {text}
    </button>
  );
}

export default Button;
