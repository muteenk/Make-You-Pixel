"use client"
import { useState } from "react"
import Image from "next/image"
import Logo from "../Atoms/Logo"
import {useSession, signIn} from "next-auth/react"

export default function AccountModalContent() {
  const { data: session } = useSession()

  const [email, setEmail] = useState("")

  const authWithMail = async () => {
    
    try {
      if (!email || email === "" || email === " ") return;
        const res = await signIn('email', {email})
        console.log(res)
    }
    catch (error) {
      console.error(error)
    }
    
  }

  const authWithGithub = async () => {
    signIn('github')
  }


  if (session) {
    const imgUrl: string = (session.user.image === "default") ? process.env.DEFAULT_AVATAR_URL || "" : session.user.image || "";
    return (
      <>
        {
          session.user.image ? <Image src={imgUrl} alt="User Image" width={100} height={100} className="rounded-full" /> : <i className="fa-solid fa-user-circle"></i>
        }
        <p>Signed in as {session.user.email}</p>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <button onClick={authWithMail}>Sign in with Magic Link</button>
      <br/>
      <br/>
      <button onClick={authWithGithub}>Sign in with Github</button>

    </>
  )
}
