import Image from "next/image"
import Logo from "../Atoms/Logo"
import {useSession, signIn} from "next-auth/react"

export default function AccountModalContent() {
  const { data: session } = useSession()


  const authenticate = async () => {
    
    signIn()
    
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
      <button onClick={authenticate}>Sign in</button>
    </>
  )
}
