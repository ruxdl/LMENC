import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from 'next/link'

export default function Ventes(){
  return (
    <div>
      <Header />
      <main className="container">
        <h2>Ventes de malles et pièces détachées</h2>
        <p>Nous proposons une sélection de malles restaurées et d'éléments détachés pour les professionnels et particuliers. Contactez-nous pour connaître les disponibilités.</p>

        <p><Link href="/nos-services" className="btn-secondary">Retour aux prestations</Link></p>
      </main>
      <Footer />
    </div>
  )
}
