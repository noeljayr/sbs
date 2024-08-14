"use client"

import Link from "next/link";
import logo from "@/public/logos/logo.png";
import Image from "next/image";
import { usePathname } from "next/navigation"


function Footer() {
  const pathname = usePathname();
  if(pathname !== "/login" && pathname !== "/signup"){
    return (
      <div className="footer p-8 pt-16 flex flex-col items-center gap-8 mt-48">
        <div className="w-full grid justify-between">
          <Image
            src={logo}
            alt="Smart Brain Studies Logo"
            height={500}
            width={500}
          />
  
          <div className="flex flex-col gap-2">
            <h2>Important Links</h2>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/#features">Features</Link>
              </li>
              <li>
                <Link href="/#pricing">Pricing</Link>
              </li>
  
              <li>
                <Link href="/resources">Resources</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h2>Social Links</h2>
            <ul>
              <li>
                <Link href="">Facebook</Link>
              </li>
              <li>
                <Link href="">Instagram</Link>
              </li>
              <li>
                <Link href="">LinkedIn</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h2>Other Links</h2>
            <ul>
              <li>
                <Link href="">Terms of use</Link>
              </li>
              <li>
                <Link href="">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <span>
            © 2024 <b>Smart Brain Studies.</b>
          </span>
          <span className="opacity-50">All Rights Reserved</span>
        </div>
      </div>
    );
  }
  
}

export default Footer;
