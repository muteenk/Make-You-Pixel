import Image from "next/image"
import Logo from "../Atoms/Logo"
import {useSession, signIn} from "next-auth/react"

export default function AccountModalContent() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        <Image src={session.user.image} alt="User Image" width={100} height={100} className="rounded-full" />
        <p>Signed in as {session.user.email}</p>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}
