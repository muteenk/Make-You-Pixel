import Image from "next/image"
import Logo from "../Atoms/Logo"
import {useSession, signIn} from "next-auth/react"

export default function AccountModalContent() {
  const { data: session } = useSession()


  const authenticate = async () => {
    
    signIn()
    
  }


  if (session) {
    console.log(session)
    return (
      <>
        {
          session.user.image ? <Image src={session.user.image} alt="User Image" width={100} height={100} className="rounded-full" /> : <i className="fa-solid fa-user-circle"></i>
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
