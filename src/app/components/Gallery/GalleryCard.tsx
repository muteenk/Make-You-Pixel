import Link from "next/link"
import Image from "next/image"
import { T_GalleryCard } from "@/app/lib/types"

const GalleryCard = (props: T_GalleryCard) => {
  return (
    <div className="group relative w-full my-4">
      <Link href={props.image}>
        <div className="group-hover:h-full h-0 absolute top-0 left-0 z-20 w-full bg-[black] bg-opacity-50 transition-all duration-500"></div>
        <Image src={`${props.image}`} alt={props.altText} width={300} height={200} className="relative z-10 w-[100%] h-auto" />
        <div className="group-hover:opacity-100 opacity-0 absolute w-full z-30 bottom-0 left-0 px-3 py-2 transition-all duration-500">
          <h2 className="font-bold text-[white] line-clamp-1">{props.title}</h2>
          <p className="text-[white] line-clamp-1">{props.description}</p>
        </div>
      </Link>
    </div>
  )
}

export default GalleryCard
