import { type } from "os";
import React from "react";
import { twMerge } from "tailwind-merge";

const buttonVarlite = {
  primary: " bg-purple-500",
  red: " bg-red-500",
  gray: " bg-gray-500",
};
const buttonSize = {
  sm: "text-sm",
  md: "text-md",
  lg: "text-lg",
};
const buttonIcon = {
  true: "icon",
  false: "",
};
type ButtonProps = {
  title: string;
  varlite: "primary" | "red" | "gray";
  size: "sm" | "md" | "lg";
  icon: "true" | "false";
};

function Button(props: ButtonProps) {
  if (!props) return null;
  const { title, varlite, size, icon } = props;

  return (
    <button
      className={twMerge(
        `inline-flex items-center justify-center gap-3 p-5 text-black rounded-lg text-sm
        ${buttonVarlite[varlite]} ${buttonSize[size]}`
      )}
    >
      {title}
      <div className="icon"> {buttonIcon[icon]}</div>
    </button>
  );
}

export default Button;
