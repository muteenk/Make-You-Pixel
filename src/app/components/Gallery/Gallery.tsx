import GalleryCard from "./GalleryCard"
import { testGalleryData } from "./GallaryData"

const Gallery = () => {
  return (
    <main>
        <section className="columns-4 mx-4">
        {
            testGalleryData.map((item) => (
                <GalleryCard key={item.id} {...item} />
            ))
        }
        </section>
    </main>
  )
}

export default Gallery
