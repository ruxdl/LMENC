import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function Services(){
  return (
    <div>
      <Header />

      <main className="container">
        <h2>Nos prestations</h2>

        {/* SERVICE 1 */}
        <section className="about-section">
          <div className="about-row">
            <div className="about-text">
              <div className="values-box">
                <h3>Rénovation de malles</h3>
                <p>
                  Réparations structurales, restauration des revêtements et traitements
                  des cuirs pour redonner vie aux pièces anciennes.
                </p>
                <Link href="/nos-services/renovations-de-malles" className="btn-secondary">
                  En savoir plus
                </Link>
              </div>
            </div>

            <div className="about-image">
              <img
                src="assets/img/service-renovation.png"
                alt="Rénovation de malles"
                style={{ width: '63%' }}
              />
            </div>
          </div>

          <div className="cut-line" aria-hidden="true">
            <img src="assets/img/scissors.svg" alt="ciseaux" className="cut-svg" />
          </div>
        </section>

        {/* SERVICE 2 */}
        <section className="about-section">
          <div className="about-row">
            <div className="about-image">
              <img
                src="assets/img/service-creation.jpg"
                alt="Créations de malles"
                style={{ width: '50%' }}
              />
            </div>

            <div className="about-text">
              <div className="values-box">
                <h3>Créations de malles</h3>
                <p>
                  Conceptions sur-mesure et réalisations artisanales pour créer
                  des malles uniques.
                </p>
                <Link href="/nos-services/creations-de-malles" className="btn-secondary">
                  En savoir plus
                </Link>
              </div>
            </div>
          </div>

          <div className="cut-line" aria-hidden="true">
            <img src="assets/img/scissors.svg" alt="ciseaux" className="cut-svg" />
          </div>
        </section>

        {/* SERVICE 3 */}
        <section className="about-section">
          <div className="about-row">
            <div className="about-text">
              <div className="values-box">
                <h3>Ventes de malles et pièces détachées</h3>
                <p>
                  Sélection de malles prêtes à l'emploi et pièces détachées pour
                  restauration ou personnalisation.
                </p>
                <Link href="/nos-services/ventes-de-malles" className="btn-secondary">
                  En savoir plus
                </Link>
              </div>
            </div>

            <div className="about-image">
              <img
                src="assets/img/service-vente.jpg"
                alt="Ventes de malles"
                style={{ width: '63%' }}
              />
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
