import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
        <div className="flex">
            <h2 className="font-sp font-bold text-[30px] text-[black]">Make You</h2>
            <span className="font-sp font-bold text-[30px] text-[black] bg-primary px-3 mx-1 rotate-[5deg]">Pixel</span>
        </div>
    </Link>
  )
}

export default Logo