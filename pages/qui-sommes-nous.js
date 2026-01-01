import Header from '../components/Header'
import Footer from '../components/Footer'
export default function About(){
  return (
    <div>
      <Header />
      <main className="container">
        <h2>Qui sommes-nous ?</h2>

        <section className="about-section">
          <div className="about-row">
            <div className="about-text">
              <p><strong>La Malle en Coin</strong> est une entreprise fondée en 1998 par Jean-Philippe Roland, passionné d’art et de restauration du patrimoine. Animé par l’amour des objets anciens et le respect de leur histoire, il a créé un atelier dédié à la restauration et à la valorisation des malles d’époque.</p>
              <p>Implantée en Alsace, à Haguenau, La Malle en Coin est une entreprise locale qui valorise l’artisanat et les traditions régionales, en proposant un travail authentique et durable.</p>
            </div>
            <div className="about-image">
              {/* Définir la largeur en pourcentage ici (ex: '80%') */}
              <img src="assets/img/qsn1.png" alt="La Malle en Coin - atelier" style={{width: '50%'}} />
            </div>
          </div>
        </section>

        <section className="about-section">
          <div className="about-row">
            <div className="about-image">
              {/* Définir la largeur en pourcentage ici (ex: '70%') */}
              <img src="assets/img/qsn2.png" alt="Jean-Philippe Roland" style={{width: '50%'}} />
            </div>
            <div className="about-text">
              <h3>Une équipe de passionnés</h3>
              <p>Derrière La Malle en Coin, c’est une équipe complémentaire qui œuvre au quotidien :</p>
              <ul>
                <li><strong>Jean-Philippe</strong>, restaurateur, met son expertise et sa passion au service de chaque malle, en respectant les techniques traditionnelles.</li>
                <li><strong>Marie</strong>, en charge de l’organisation, du suivi des projets et de la relation avec les clients, participe activement à la vie et au développement de l’atelier.</li>
                <li><strong>Le peintre</strong>, spécialisé dans les finitions et décors, intervient pour redonner aux malles leur esthétique d’origine ou leur apporter une touche artistique unique.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h3>Un savoir-faire artisanal et traditionnel</h3>
          <p>Spécialisée dans la restauration de malles, La Malle en Coin fait partie des rares entreprises à perpétuer un savoir-faire artisanal traditionnel. Chaque pièce est restaurée avec soin, dans le respect des techniques d’origine, afin de préserver son authenticité et son histoire. L’atelier se distingue également par l’utilisation d’outils anciens, fidèles aux méthodes d’autrefois, apportant une véritable valeur ajoutée au travail de restauration et reflétant une approche profondément respectueuse des traditions.</p>
          <div className="about-gallery">
            {/* Définir un pourcentage différent pour chaque vignette si besoin */}
            <img src="assets/img/qsn3.png" alt="Restaurations 1" style={{width: '92%'}} />
            <img src="assets/img/qsn4.png" alt="Restaurations 2" style={{width: '85%'}} />
            <img src="assets/img/qsn5.png" alt="Restaurations 3" style={{width: '78%'}} />
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
