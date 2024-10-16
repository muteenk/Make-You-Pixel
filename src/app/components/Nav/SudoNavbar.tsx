"use client"

import Link from "next/link";
import Image from "next/image";
import {useSession, signOut} from "next-auth/react";
import Logo from "@/app/components/Atoms/Logo";

type NavbarProps = {
  accModal: string,
  setAccModal: (state: string) => void
}

const Navbar = ({accModal, setAccModal}: NavbarProps) => {

  const {data: session} = useSession();

  // Modal States
  const activeState = "fixed rounded-md w-[40%] h-[65vh] bg-[white] z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] animate-modalFadeIn";
  const hiddenState = "hidden";

  const toggleModal = () => {
    if (accModal === activeState) setAccModal(hiddenState);
    else setAccModal(activeState);
  }

  return (
    <nav className="flex justify-around items-center py-3">
        <Logo/>
        <div className="flex justify-center items-center">
            {
              session ? 
              <>
                <button onClick={toggleModal} className="font-bold font-sec text-[#232323] text-[15px] mx-3">
                {
                  session.user.image ? <Image src={(session.user.image === "default") ? process.env.DEFAULT_AVATAR_URL || "" : session.user.image || ""} alt="User Image" width={30} height={30} className="rounded-full border-[1px] border-yellowBorder" priority={false} /> : <i className="fa-solid fa-user-circle"></i>
                } 
                </button>
                <button onClick={() => signOut()} className="font-bold text-[#232323] text-[15px] mx-3">Sign Out</button>
              </>
              :
              <>
                <button onClick={toggleModal} className="font-bold text-[#232323] text-[15px] mx-3">Log In</button>
                <button onClick={toggleModal} className="font-bold text-[#232323] text-[15px] mx-3">Join</button>
              </>
            }
            </div>
    </nav>
  )
}

export default Navbar
