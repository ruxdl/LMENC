import {useState, useEffect} from 'react'

// Drop your images in public/assets/gallery named slide1.jpg, slide2.jpg, slide3.jpg ...
const slides = [
  'assets/gallery/slide1.png',
  'assets/gallery/slide2.png',
  'assets/gallery/slide3.png',
  'assets/gallery/slide4.png',
  'assets/gallery/slide5.png',
  'assets/gallery/slide6.png',
  'assets/gallery/slide7.png',
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
