import { type } from "os";
import React, { TdHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
type TDropDown = {
  title?: boolean;
  onClick?: () => void;
  chill?: React.ReactNode;
};
function DropDown(props: TDropDown) {
  const { title, onClick, chill } = props;
  return (
    <div
      className={twMerge(
        `p-6 bg-orange-500 h[100px] inline-flex items-center justify-center ml-4 w-[100px] rounded-2xl`
      )}
      onClick={onClick}
    >
      {chill}
    </div>
  );
}

export default DropDown;
