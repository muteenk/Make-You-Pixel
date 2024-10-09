import Image from "next/image"
import { T_GalleryCard } from "@/app/lib/types"

const GalleryCard = (props: T_GalleryCard) => {
  return (
    <div className="relative w-full my-4">
        <div className="absolute top-0 left-0 z-20 w-full h-full bg-[black] bg-opacity-50"></div>
        <Image src={`${props.image}`} alt={props.altText} width={300} height={200} className="relative z-10 w-[100%] h-auto" />
        <div className="absolute w-full z-30 bottom-0 left-0 px-3 py-2">
          <h2 className="font-bold text-[white] line-clamp-1">{props.title}</h2>
          <p className="text-[white] line-clamp-1">{props.description}</p>
        </div>
    </div>
  )
}

export default GalleryCard
