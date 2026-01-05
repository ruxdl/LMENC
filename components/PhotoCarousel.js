import {useState, useEffect} from 'react'

// Drop your images in public/assets/gallery named slide1.jpg, slide2.jpg, slide3.jpg ...
const slides = [
  'assets/img/malle1.jpg',
  'assets/img/malle2.jpg',
  'assets/img/malle3.jpg',
  'assets/img/malle4.jpg',
  'assets/img/qsn3.png',
  'assets/img/qsn4.png',
  'assets/img/qsn5.png',
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
