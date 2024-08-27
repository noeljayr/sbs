"use client";

import "@/css/calculator.css";
import Calculator from "@/components/Calculator";
import { SearchNormal1 } from "iconsax-react";
import { useState } from "react";

const tipsTutorials = [
  {
    title: "How To Calculate Factorial of A Number",
    category: "Tip",
  },
  {
    title: "Calculus: The Chain Rule",
    category: "Tutorial",
  },
];

function checkCategory(category: string) {
  if (category === "Tip") {
    return <span className="category">Tip</span>;
  } else {
    return <span className="category">Tutorial</span>;
  }
}

function CalculatorPage() {
  const [search, setSearch] = useState("");
  return (
    <div className="calc-wrapper grid gap-8 self-center">
      <Calculator />
      <div className="tips-tutorials">
        <h2 className="font-extrabold">Tutorials & Tips</h2>

        <div className="search-bar">
          <input  onChange={(e) => setSearch(e.target.value)}  type="text" placeholder="Search..." id="search-tips" />
          <span>
            {" "}
            <SearchNormal1 />
          </span>
        </div>

        {tipsTutorials
          .filter((tiptuorial, index) => {
            return search.toLocaleLowerCase() === ""
              ? tiptuorial
              : tiptuorial.title.toLocaleLowerCase().includes(search);
          })
          .map((tiptuorial, index) => {
            return (
              <div key={index} className="tip-tutorial cursor-pointer flex flex-col gap-2">
                {checkCategory(tiptuorial.category)}
                <span className="truncate font-bold">{tiptuorial.title}</span>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default CalculatorPage;
