import React from "react";
import { twMerge } from "tailwind-merge";

function Button(props: any) {
  if (!props) return null;
  let bgClass = "";
  if (props.varlite === "primary") bgClass = "bg-purple-500";
  if (props.varlite === "primary") bgClass = "bg-purple-500";
  if (props.varlite === "primary") bgClass = "bg-purple-500";
  return (
    <button
      className={twMerge(
        "inline-flex items-center justify-center p-5 text-white rounded-lg {props.varlite}"
      )}
    >
      {props.title}
    </button>
  );
}

export default Button;
