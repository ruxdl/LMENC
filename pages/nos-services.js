import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Services(){
  return (
    <div>
      <Header />
      <main className="container">
        <h2>Nos prestations</h2>

        <section className="about-section">
          <div className="about-row">
            <div className="about-text">
              <div className="values-box">
                <h3>Rénovation de malles</h3>
                <p>Nous prenons en charge la restauration complète des malles et bagages de luxe : réparations structurelles, restauration des toiles et traitements des cuirs. Chaque intervention vise à préserver l'authenticité de la pièce tout en garantissant sa solidité et son esthétisme.</p>
                <p>Nous évaluons d'abord l'état de la malle puis proposons un devis détaillé et des options de finition (conservation, retannage, reprise des garnitures, remplacement contrôlé des supports abîmés).</p>
              </div>
            </div>
            <div className="about-image">
              <img src="assets/img/service-renovation.jpg" alt="Rénovation de malles" style={{width: '63%'}} />
            </div>
          </div>
          <div className="cut-line" aria-hidden="true"><img src="assets/img/scissors.svg" alt="ciseaux" className="cut-svg"/></div>
        </section>

        <section className="about-section">
          <div className="about-row">
            <div className="about-image">
              <img src="assets/img/service-creation.jpg" alt="Créations de malles" style={{width: '50%'}} />
            </div>
            <div className="about-text">
              <div className="values-box">
                <h3>Création sur mesure</h3>
                <p>Nous concevons des malles uniques, imaginées et réalisées entièrement à l'atelier. Du choix des matériaux à la finition, chaque étape est réalisée à la main pour obtenir une pièce sur‑mesure qui vous ressemble.</p>
                <p>Sur demande, nous réalisons des modèles pour des commandes privées ou des petites séries, avec suivi de projet et validations à chaque étape.</p>
              </div>
            </div>
          </div>
          <div className="cut-line" aria-hidden="true"><img src="assets/img/scissors.svg" alt="ciseaux" className="cut-svg"/></div>
        </section>

        <section className="about-section">
          <div className="values-box">
            <h3>Ventes et pièces détachées</h3>
            <p>Nous proposons une sélection de malles restaurées ainsi que des pièces détachées (fermoires, roulettes, garnitures) pour la restauration ou la personnalisation. Nos objets sont vérifiés et préparés avant mise en vente.</p>
            <p>Contactez-nous pour connaître les disponibilités et les tarifs.</p>
          </div>
           <div className="about-gallery">
             <img src="assets/img/malle1.jpg" alt="Malle 1" style={{width: '31%'}} />
             <img src="assets/img/malle2.jpg" alt="Malle 2" style={{width: '35%'}} />
             <img src="assets/img/malle3.jpg" alt="Malle 3" style={{width: '35%'}} />
           </div>
         </section>

      </main>
      <Footer />
    </div>
  )
}
