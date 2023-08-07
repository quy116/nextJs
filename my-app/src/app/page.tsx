import Avatar from "@/components/avatar/Avatar";
import Button from "@/components/button/Button";
import Image from "next/image";
import { Fragment } from "react";

export default function Home() {
  return (
    <div>
      <Button title="contact me" varlite="primary" size="sm" icon="false" />{" "}
      <Button title="contact me" varlite="red" size="md" icon="true" />{" "}
      <Button title="contact me" varlite="gray" size="lg" icon="true" />{" "}
      <Avatar type="medium"></Avatar>
    </div>
  );
}
