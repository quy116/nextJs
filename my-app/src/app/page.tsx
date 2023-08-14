"use client";
import Avatar from "@/components/avatar/Avatar";
import Button from "@/components/button/Button";
import DropDown from "@/components/dropDown/DropDown";
import { log } from "console";
import Image from "next/image";
import { Fragment, use, useState } from "react";

export default function Home() {
  const [isShowDropDown, setIsShowDropDown] = useState<boolean>(false);
  const handleDropDown = () => {
    setIsShowDropDown((prev) => !prev);
  };

  return (
    <div>
      <Button title="contact me" varlite="primary" size="sm" icon="false" />{" "}
      <Button title="contact me" varlite="red" size="md" icon="false" />{" "}
      <Button title="contact me" varlite="gray" size="lg" icon="true" />{" "}
      <Avatar type="low"></Avatar>
      <DropDown
        chill="helô"
        title={isShowDropDown}
        onClick={handleDropDown}
      ></DropDown>
      {isShowDropDown ? (
        <Button title="hello" varlite="primary" size="sm" icon="false"></Button>
      ) : (
        ""
      )}
    </div>
  );
}
