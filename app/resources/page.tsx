"use client";

import { useState } from "react";
import { SearchNormal1 } from "iconsax-react";
import "@/css/resources.css";
import File from "@/components/File";

const files = [
  {
    title: "Demand Analysis and Forecasting",
    cover: "1.png",
    author: "Amit Bhatnagar",
    format: "MP4",
    size: "15.0 MB",
  },
  {
    title: "Market Structure and Competition",
    cover: "2.png",
    author: "Pranjal Tiwari ",
    format: "DOCX",
    size: "200 KB",
  },
  {
    title: "Introduction to Business Management",
    cover: "3.png",
    author: "H. Badenhorst-Weiss ",
    format: "PDF",
    size: "9.7 MB",
  },
  {
    title: "Principles of Marketing",
    cover: "4.png",
    author: "Philip Kotler",
    format: "PPT",
    size: "350 KB",
  },
];

function Resources() {
  const [search, setSearch] = useState("");

  return (
    <div className="flex flex-col gap-4 rescource-container self-center">
      <div className="search-bar">
        <input
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search For Resources"
          type="text"
        />
        <span className="">
          <SearchNormal1 color="#fef6f7" />
        </span>
      </div>

      <div className="files flex flex-col gap-8">
        {files
          .filter((file, index) => {
            return search.toLocaleLowerCase() === ""
              ? file
              : file.title.toLocaleLowerCase().includes(search);
          })
          .map((file, index) => {
            return (
              <File
                key={index}
                title={file.title}
                author={file.author}
                cover={file.cover}
                size={file.size}
                format={file.format}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Resources;
