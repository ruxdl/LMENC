import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from 'next/link'

export default function Ventes(){
  // runtime prefix to support deployment under a repo subpath (e.g. /LMENC)
  const prefix = typeof window !== 'undefined' && window.location.pathname.startsWith('/LMENC') ? '/LMENC' : ''

  const products = [
    { id: 'R3402', name: 'Malle Fleur Louis Vuitton', img: `${prefix}/assets/img/malle1.jpg`, price: '€4900' },
    { id: 'R3373', name: 'Malle Inspirée de Mondrian', img: `${prefix}/assets/img/malle2.jpg`, price: '€3700' },
    { id: 'R3377', name: 'Malle Wardrobe Louis Vuitton Monogrammée', img: `${prefix}/assets/img/malle3.jpg`, price: '€22000' },
    { id: 'R3159', name: 'Malle Courrier Cintrée Rose', img: `${prefix}/assets/img/malle4.jpg`, price: '€650' },
  ]

  return (
    <div>
      <Header />
      <main className="container">

        {/* Title, hero image and intro text requested by user */}
        <h1>Ventes de malles et pièces détachées</h1>
        <img src={`${prefix}/assets/img/service-vente.jpg`} alt="Ventes de malles" style={{width:'100%',maxWidth:900,display:'block',margin:'16px auto',borderRadius:8}} />
        <p>Nous proposons une sélection de malles restaurées et d'éléments détachés pour les professionnels et particuliers souhaitant restaurer ou personnaliser leurs pièces.</p>
        <p>Contactez-nous pour connaître nos disponibilités et recevoir des conseils sur les pièces compatibles.</p>

        {/* Demo shop grid (unchanged) */}
        <h2>Boutique </h2>

        <section className="shop-grid">
          {products.map(p => (
            <article key={p.id} className="shop-item">
              <div className="product-image">
                <img src={p.img} alt={p.name} />
              </div>
              <div className="product-meta">
                <div className="product-ref">Réf. {p.id}</div>
                <h3 className="product-title">{p.name}</h3>
                <div className="product-price">{p.price}</div>
                <Link href="#" className="btn-secondary" aria-disabled>Ajouter au panier</Link>
              </div>
            </article>
          ))}
        </section>

        <p style={{marginTop:18,textAlign:'center'}}>
          <a href="https://boutique.la-malle-en-coin.com/fr/" target="_blank" rel="noopener noreferrer" className="btn-secondary">Cliquez ici pour accéder aux pièces détachées</a>
        </p>

        <p style={{marginTop:20}}><Link href="/nos-services" className="btn-secondary">Retour aux prestations</Link></p>
      </main>
      <Footer />
    </div>
  )
}
