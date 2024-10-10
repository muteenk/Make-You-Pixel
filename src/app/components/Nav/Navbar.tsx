import Link from "next/link";
import Logo from "@/app/components/Atoms/Logo";

const Navbar = ({accModal, setAccModal}) => {

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
            <Link href="/" className="font-bold font-sec text-[#232323] text-[15px] mx-7">Explore</Link>
            <button onClick={toggleModal} className="font-bold font-sec text-[#232323] text-[15px] mx-3">Log In</button>
            <button onClick={toggleModal} className="font-bold font-sec text-[#232323] text-[15px] mx-3">Join</button>
        </div>
    </nav>
  )
}

export default Navbar
