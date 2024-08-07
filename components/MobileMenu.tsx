"use client";
import React from "react";
import { useState } from "react";
import "@/css/menu.css";
import Link from "next/link";

function MobileMenu() {
  const [active, setActive] = useState(false);

  return (
    <>
      <div
        onClick={() => setActive(!active)}
        className={`menu${active ? " menu-active" : ""}`}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <div className={`menu-list gap-4${active ? " menu-list-active" : ""}`}>
        <Link onClick={() => setActive(!active)} className="font-bold" href="/">
          Home
        </Link>
        <Link onClick={() => setActive(!active)} className="font-bold" href="#">
          Features
        </Link>
        <Link onClick={() => setActive(!active)} className="font-bold" href="#">
          Pricing
        </Link>

        <Link onClick={() => setActive(!active)} className="font-bold" href="#">
          Resources
        </Link>

        <Link onClick={() => setActive(!active)} href="#" className="cta">
          Get Started
        </Link>
      </div>
    </>
  );
}

export default MobileMenu;
