import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Creations(){
  // determine video path at runtime so it works both locally and when deployed under a basePath
  const videoSrc = typeof window !== 'undefined' && window.location.pathname.startsWith('/LMENC') ? '/LMENC/assets/videos/restauration.mp4' : '/assets/videos/restauration.mp4'

  return (
    <div>
      <Header />
      <main className="container">
        <h2>La création de malles</h2>
        <p>La création de malles est au cœur de notre démarche artisanale. C’est un temps à part, qui demande concentration, exigence et liberté créative. Une à deux fois par an, l’atelier ferme volontairement ses portes.</p>

        <p>Avec mon associé, nous nous consacrons pleinement à la conception et à la fabrication de nouvelles malles, pensées comme des pièces uniques ou de très petites séries.</p>

        <p>Chaque malle est fabriquée dans le respect des savoir-faire traditionnels, avec la même exigence que pour la restauration : précision des assemblages, choix des matériaux, finitions soignées.</p>

        <video src={videoSrc} controls preload="metadata" playsInline controlsList="nodownload" className="service-video" style={{width:'100%',maxWidth:900,display:'block',margin:'16px auto',borderRadius:8}}>
          Votre navigateur ne supporte pas la vidéo.
        </video>
      </main>
      <Footer />
    </div>
  )
}
