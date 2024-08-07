import Link from "next/link"
import logo from "@/public/logos/logo.png"
import Image from "next/image"
import CTA from "./CTA"
import MobileMenu from "./MobileMenu"


function Navbar() {
  return (
    <div className='navbar fixed flex justify-between'>
        <Link href="/" className="logo">
            <Image src={logo} alt="Smart Brain Studies Logo" height={500} width={500} />
        </Link>

        <div className="links flex gap-4 items-center">
            <Link className="font-bold link" href="/">Home</Link>
            <Link className="font-bold link" href="#">Features</Link>
            <Link className="font-bold link" href="#">Pricing</Link>
            <Link className="font-bold link" href="#">Resources</Link>
            <CTA />
        </div>

        <MobileMenu />
    </div>
  )
}

export default Navbar