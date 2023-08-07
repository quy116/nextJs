import { type } from "os";
import React from "react";
import { twMerge } from "tailwind-merge";
const contType = {
  medium: "anh ne",
  low: "dev",
  none: "",
};
type AvatarProps = {
  type: "medium" | "low" | "none";
};
function Avatar(props: AvatarProps) {
  if (!props) return null;
  const { type } = props;
  return (
    <div
      className={twMerge(
        `rounded-full bg-purple-500 p-10 inline-flex items-center justify-center `
      )}
    >
      {contType[type]}
    </div>
  );
}

export default Avatar;
