import {useState, useEffect} from 'react'

const reviews = [
  {name: 'Claire M.', rating: 5, text: "Travail exceptionnel, ma malle a retrouvé toute sa splendeur. Très professionnel et à l'écoute."},
  {name: 'Antoine L.', rating: 5, text: "Service rapide et résultats soignés. Je recommande vivement pour les pièces anciennes."},
  {name: 'Sophie G.', rating: 4, text: "Grande attention aux détails. Petit délai de livraison mais le résultat vaut l'attente."},
  {name: 'Marc D.', rating: 5, text: "Un artisanat rare et précieux — finition parfaite, merci à toute l'équipe."},
  {name: 'Elise R.', rating: 4, text: "Très bonne expérience client, explications claires et restauration impeccable."},
  {name: 'Julien P.', rating: 5, text: "Professionnalisme et passion visibles dans chaque étape du travail."},
  {name: 'Véronique T.', rating: 5, text: "Je suis ravie du résultat. L'atelier a respecté l'âme de la pièce."},
  {name: 'Olivier S.', rating: 4, text: "Service de qualité, équipe sympathique. Quelques retouches mineures après livraison."}
]

function Stars({value}){
  return (
    <div className="review-stars" aria-hidden>
      {Array.from({length:5}).map((_,i)=> (
        <span key={i} className={i < value ? 'star filled' : 'star'}>★</span>
      ))}
    </div>
  )
}

export default function ReviewsCarousel({listOffset = -11}){
  const [index, setIndex] = useState(0) // start index of visible window
  const [visibleCount, setVisibleCount] = useState(3)

  useEffect(()=>{
    function update(){
      const w = window.innerWidth
      if(w >= 900) setVisibleCount(3)
      else if(w >= 600) setVisibleCount(2)
      else setVisibleCount(1)
    }
    update()
    window.addEventListener('resize', update)
    return ()=> window.removeEventListener('resize', update)
  },[])

  useEffect(()=>{
    // keep index valid
    setIndex(i => ((i % reviews.length) + reviews.length) % reviews.length)
  },[visibleCount])

  useEffect(()=>{
    const id = setInterval(()=> setIndex(i => (i + 1) % reviews.length), 5000)
    return ()=> clearInterval(id)
  },[])

  const prev = ()=> setIndex(i => (i - 1 + reviews.length) % reviews.length)
  const next = ()=> setIndex(i => (i + 1) % reviews.length)
  const goTo = (i)=> setIndex(((i % reviews.length) + reviews.length) % reviews.length)

  // build visible slice with wrap
  const visible = Array.from({length: visibleCount}).map((_,offset)=> reviews[(index + offset) % reviews.length])
  const cardWidthPercent = 100 / visibleCount

  return (
    <section className="reviews-carousel container" aria-label="Avis clients">
      <h3 className="reviews-title">Ils nous font confiance</h3>
      <div className="reviews-wrap">
        <button className="reviews-nav prev" onClick={prev} aria-label="Précédent">‹</button>

        <ul className="reviews-list" aria-live="polite" style={{transform: `translateX(${listOffset}px)`}}>
          {visible.map((r, i) => (
            <li className="review-card" key={i} aria-hidden={false} style={{flex: `0 0 ${cardWidthPercent}%`}}>
              <Stars value={r.rating} />
              <p className="review-text">{r.text}</p>
              <p className="review-name"><strong>{r.name}</strong></p>
            </li>
          ))}
        </ul>

        <button className="reviews-nav next" onClick={next} aria-label="Suivant">›</button>
      </div>

      <div className="reviews-dots" role="tablist">
        {Array.from({length: reviews.length}).map((_,i)=> (
          <button key={i} className={`dot ${i === index ? 'active' : ''}`} onClick={()=> goTo(i)} aria-label={`Voir avis ${i+1}`} />
        ))}
      </div>
    </section>
  )
}
