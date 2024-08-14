"use client";
import Link from "next/link";
// import Image from "next/image";

type fileTypes = {
  title: string;
  cover: string;
  author: string;
  format: string;
  size: string;
};

function File(props: fileTypes) {
  return (
    <Link
      download={true}
      href="/public/documents/test-document.pdf"
      className="file grid items-center gap-2"
    >
      <span className="cover">
        <img src={`/documents/${props.cover}`} alt="" height={500} width={500} />
      </span>
      <div className="info flex flex-col w-full overflow-hidden">
        <h3 className="font-bold truncate">{props.title}</h3>
        <span className="opacity-60 flex gap-2">
          By: <span className="author truncate"> {props.author}</span> <b>•</b>
          <span className="format truncate">{props.format}</span> <b>•</b>
          <span className="size truncate">{props.size}</span>
        </span>
      </div>
    </Link>
  );
}

export default File;
