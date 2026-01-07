import Header from '../components/Header'
import Footer from '../components/Footer'
import ReviewsCarousel from '../components/ReviewsCarousel'
import PhotoCarousel from '../components/PhotoCarousel'
import Link from 'next/link'

export default function Home(){
  // runtime prefix to support deployment under a repo subpath (e.g. /LMENC)
  const prefix = (typeof window !== 'undefined' && window.location.pathname.startsWith('/LMENC')) ? '/LMENC' : ''
  return (
    <div>
      <Header />
      <main>
        <section className="hero">
          <div className="container hero-content">
            <div className="hero-banner">
              <h2 className="hero-title">Rénovation de malles et bagages de luxe</h2>
              <p className="hero-sub">Savoir-faire artisanal — Restauration, personnalisation et entretien pour pièces d'exception</p>
            </div>
            <div className="cut-line" aria-hidden="true"><img src={`${prefix}/assets/img/scissors.svg`} alt="ciseaux" className="cut-svg" loading="lazy"/></div>
          </div>
        </section>

        <section className="hero-panels container">
          <div className="panels">
            <div className="panel panel-text">
              <h4 className="panel-title">Notre savoir‑faire</h4>
              <p>Spécialistes de la rénovation de malles et bagages de luxe : réparations structurales, restauration des revêtements, traitement des cuirs et finitions sur‑mesure. Chaque pièce est traitée avec discrétion et attention aux détails.</p>
            </div>
            <div className="panel panel-video">
              <div className="video-wrap">
                <iframe src="https://www.youtube.com/embed/YvbjsaVSoQ0" title="La Malle en Coin - vidéo" frameBorder="0" allowFullScreen></iframe>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="container services">
          <div className="services-grid">
            <article className="service">
              <h4 className="service-title">Nos prestations</h4>
              <p className="service-desc">Explorez l'ensemble de nos prestations et services.</p>
              <Link href="/nos-services" className="btn-secondary">En savoir plus</Link>
            </article>

            <article className="service">
              <h4 className="service-title">Qui sommes-nous ?</h4>
              <p className="service-desc">Découvrez notre histoire et notre philosophie.</p>
              <Link href="/qui-sommes-nous" className="btn-secondary">En savoir plus</Link>
            </article>

            <article className="service">
              <h4 className="service-title">Nos valeurs</h4>
              <p className="service-desc">Apprenez en plus sur nos valeurs.</p>
              <Link href="/nos-valeurs" className="btn-secondary">En savoir plus</Link>
            </article>
          </div>
        </section>

        {/* Photo carousel (single-image rotating) */}
        <PhotoCarousel interval={5000} />

        {/* Reviews carousel */}
        <ReviewsCarousel />

      </main>
      <Footer />
    </div>
  )
}
