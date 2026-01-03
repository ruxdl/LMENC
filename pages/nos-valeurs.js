import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Values(){
  const prefix = typeof window !== 'undefined' && window.location.pathname.startsWith('/LMENC') ? '/LMENC' : ''
  const videoSrc = `${prefix}/assets/videos/valeurs.mp4`
  const imgSrc = `${prefix}/assets/img/valeurs.jpg`

  return (
    <div>
      <Header />
      <main className="container">
        <h2>Nos valeurs</h2>
        <div className="values-box">
          <p>Chez La Malle en Coin, nous rénovons les bagages de luxe dans le respect de leur histoire et de leur authenticité. Chaque pièce est restaurée à la main, avec exigence et savoir-faire artisanal. Nous privilégions la conservation des matériaux d’origine — toiles, cuirs, bois — lorsque leur état le permet, car préserver vaut toujours mieux que remplacer. Notre approche est mesurée, jamais excessive : réparer, sublimer, sans effacer le temps ni l’âme de l’objet. Chaque bagage est unique. Chaque restauration est sur mesure.</p>
        </div>

        <section className="values-media" style={{display:'flex',gap:16,alignItems:'flex-start',marginTop:18}}>
          <img src={imgSrc} alt="Nos valeurs" style={{width:'50%',borderRadius:8,objectFit:'cover'}} />
          <video src={videoSrc} controls style={{width:'50%',borderRadius:8}} />
        </section>

      </main>
      <Footer />
    </div>
  )
}
