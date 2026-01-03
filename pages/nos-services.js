import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function Services(){
  return (
    <div>
      <Header />
      <main className="container">
        <h2>Nos prestations</h2>

        <section className="big-services">
          <article className="service-large">
            <img src="assets/img/service-renovation.jpg" alt="Rénovation de malles" />
            <h3>Rénovations de malles</h3>
            <p>Réparations structurales, restauration des revêtements et traitements des cuirs pour redonner vie aux pièces anciennes.</p>
            <Link href="/nos-services/renovations-de-malles" className="btn-secondary">En savoir plus</Link>
          </article>

          <article className="service-large">
            <img src="assets/img/service-creation.jpg" alt="Créations de malles" />
            <h3>Créations de malles</h3>
            <p>Conceptions sur‑mesure et réalisations artisanales pour créer des malles uniques.</p>
            <Link href="/nos-services/creations-de-malles" className="btn-secondary">En savoir plus</Link>
          </article>

          <article className="service-large">
            <img src="assets/img/service-vente.jpg" alt="Ventes de malles et pièces détachées" />
            <h3>Ventes de malles et pièces détachées</h3>
            <p>Sélection de malles prêtes à l'emploi et pièces détachées pour restauration ou personnalisation.</p>
            <Link href="/nos-services/ventes-de-malles" className="btn-secondary">En savoir plus</Link>
          </article>
        </section>

      </main>
      <Footer />
    </div>
  )
}
