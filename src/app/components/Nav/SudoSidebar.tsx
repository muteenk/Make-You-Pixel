"use client"
import { useRouter } from 'next/navigation'
import Link from "next/link"
import Logo from "@/app/components/Atoms/Logo"
import { signOut } from "next-auth/react"

const SudoSidebar = () => {

  const router = useRouter();

  const authLogOut = () => {
    if (confirm("Are you sure you want to logout?")) {
      signOut();
      console.log("Logged Out");
      router.push("/");
    }
    else return;
  }

  return (
    <aside className="relative top-0 left-0 h-screen w-[16%] overflow-y-scroll bg-background shadow-lg">
      <header className="px-2 py-4">
        <Logo/>
      </header>
      <div className="flex flex-col justify-start items-start">
        <Link href="/sudo_panel/dashboard/" className="sidebar-tabs">Dashboard</Link>
        <Link href="/sudo_panel/dashboard/upload" className="sidebar-tabs">Upload</Link>
        <Link href="/sudo_panel/dashboard/gallery" className="sidebar-tabs">Gallery</Link>
      </div>
      <footer className="absolute bottom-0 left-0 w-full flex justify-between px-2 py-3">
        <Link href="/sudo_panel/dashboard/profile" className="font-bold px-3 py-2 bg-primary hover:bg-primaryHover border-[1px] border-yellowBorder">Profile</Link>
        <button onClick={authLogOut} className="font-bold px-3 py-2 hover:bg-graySelect">Logout</button>
      </footer>
    </aside>
  )
}

export default SudoSidebar
