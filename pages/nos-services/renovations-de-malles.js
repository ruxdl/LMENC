import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from 'next/link'

export default function Renovations(){
  // determine video path at runtime so it works both locally and when deployed under a basePath
  const videoSrc = typeof window !== 'undefined' && window.location.pathname.startsWith('/LMENC') ? '/LMENC/assets/videos/restauration.mp4' : '/assets/videos/restauration.mp4'

  return (
    <div>
      <Header />
      <main className="container">
        <h2>Donnez une nouvelle vie à votre malle</h2>
        <p>Vous souhaitez une malle personnalisée, en harmonie avec votre intérieur ? Vous avez besoin de nettoyer, réparer ou restaurer la toile, le cuir ou le bois d’une malle ancienne ?</p>
        <p>Nous restaurons et personnalisons des malles à la demande, dans le respect de leur histoire.</p>

        <h2>Choisir votre malle</h2>
        <ul>
          <li>Sélectionnez une malle sur place ou sur le site (rubrique Malles à vendre / à restaurer)</li>
          <li>Définissez vos envies : teinte, tissu, finition, style</li>
          <li>Nous vous accompagnons dans vos choix et réalisons la restauration sur mesure</li>
        </ul>
        <p>Si besoin, nous vous transmettons le métrage de tissu nécessaire avant intervention.</p>

        <h2>Vous possédez déjà une malle ?</h2>
        <p>Votre malle a une valeur :</p>
        <ul>
          <li>sentimentale (souvenirs de famille ou autre)</li>
          <li>patrimoniale ou financière</li>
        </ul>

        <p>Vous manquez de temps ou de compétences pour la restaurer ?</p>
        <p>👉 Nous prenons en charge la restauration complète ou partielle, selon l’état et vos attentes.</p>

        <p>Chaque projet est unique. Le coût dépend du modèle et des prestations demandées.</p>

        <h3>Budgets indicatifs</h3>
        <ul>
          <li>Malle classique : à partir d’environ 200 €</li>
          <li>Malle Wardrobe / armoire : restauration plus complexe, sur devis</li>
        </ul>

        <h3>Temps de travail indicatif</h3>
        <ul>
          <li>Malle classique (extérieur + intérieur) : 20 à 30 heures</li>
          <li>Malle Wardrobe / cabine :
            <ul>
              <li>Capitonnage intérieur : ~10 heures</li>
              <li>Tiroirs : ~2 heures par tiroir</li>
            </ul>
          </li>
        </ul>

        <h3>Choix des teintes bois</h3>
        <p>Pour les malles en bois, un nuancier peut être envoyé en haute définition afin de choisir précisément la teinte souhaitée.</p>

        {/* Video block - user should place the file in public/assets/videos */}
        <video src={videoSrc} controls preload="metadata" playsInline controlsList="nodownload" className="service-video" style={{width:'100%',maxWidth:900,display:'block',margin:'16px auto',borderRadius:8}}>
          Votre navigateur ne supporte pas la vidéo.
        </video>

        <h3>Référence publique / Anecdote</h3>
        <p>Le Musée de l’Hydraviation de Biscarrosse nous a confié la restauration d’une malle cintrée des années 1920. Elle est aujourd’hui exposée aux côtés d’un mannequin d’hôtesse de l’époque.</p>

        <h3>Notre recommandation</h3>
        <p>Chaque restauration respecte l’esprit d’origine de la malle. Lorsque la toile d’origine est en bon état, la conserver est toujours préférable : plus authentique, plus esthétique et plus respectueuse de l’histoire de la malle.</p>

        <p><Link href="/nos-services" className="btn-secondary">Retour aux prestations</Link></p>
      </main>
      <Footer />
    </div>
  )
}
