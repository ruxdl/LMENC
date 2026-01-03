import {useState, useEffect} from 'react'

// Drop your images in public/assets/gallery named slide1.jpg, slide2.jpg, slide3.jpg ...
const slides = [
  'assets/gallery/slide1.jpg',
  'assets/gallery/slide2.jpg',
  'assets/gallery/slide3.jpg',
  'assets/gallery/slide4.jpg',
  'assets/gallery/slide5.jpg',
  'assets/gallery/slide6.jpg',
  'assets/gallery/slide7.jpg',
]

export default function PhotoCarousel({interval = 4000}){
  const [index, setIndex] = useState(0)

  useEffect(()=>{
    const id = setInterval(()=> setIndex(i => (i + 1) % slides.length), interval)
    return ()=> clearInterval(id)
  },[interval])

  return (
    <section className="photo-carousel" aria-label="Galerie">
      <div className="photo-inner">
        {slides.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Slide ${i+1}`}
            className={`slide ${i === index ? 'active' : ''}`}
            loading="lazy"
          />
        ))}
      </div>
    </section>
  )
}
