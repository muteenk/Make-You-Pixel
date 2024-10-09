import Link from "next/link";
import Logo from "@/app/components/Atoms/Logo";

const Navbar = () => {
  return (
    <nav className="flex justify-around items-center py-3">
        <Logo/>
        <div className="flex justify-center items-center">
            <Link href="/" className="font-bold font-sec text-[#232323] text-[15px] mx-7">Explore</Link>
            <Link href="/" className="font-bold font-sec text-[#232323] text-[15px] mx-3">Log In</Link>
            <Link href="/" className="font-bold font-sec text-[#232323] text-[15px] mx-3">Join</Link>
        </div>
    </nav>
  )
}

export default Navbar