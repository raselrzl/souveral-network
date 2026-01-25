"use client";
import dynamic from "next/dynamic";

const PopupOnViewCom = dynamic(() => import("./PopupOnViewCom"), {
  ssr: false,
});

type Props = {
  audioSrc: string;
};

export default function PopupOnViewClientWrapper(props: Props) {
  return <PopupOnViewCom {...props} />;
}
