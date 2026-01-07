import Link from 'next/link'
import {useState} from 'react'
export default function Header(){
  const [open,setOpen] = useState(false)
  const toggle = ()=> setOpen(s=>!s)
  const close = ()=> setOpen(false)
  // compute runtime prefix so assets load correctly when site is served under a subpath (e.g. /LMENC)
  const prefix = (typeof window !== 'undefined' && window.location.pathname.startsWith('/LMENC')) ? '/LMENC' : ''

  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand">
          <Link href={prefix + '/'} onClick={close} className="brand-link" aria-label="Accueil">
            <img src={`${prefix}/assets/img/logo.png`} alt="La Malle en Coin" className="logo"/>
          </Link>
          <span className="site-title">LA MALLE EN COIN</span>
        </div>

        <nav className="main-nav">
          <button className="nav-toggle" aria-expanded={open ? 'true' : 'false'} aria-controls="nav-menu" onClick={toggle}>
            <span className="hamburger" aria-hidden="true"><span></span><span></span><span></span></span>
            <span className="menu-label">Menu</span>
          </button>

          <ul id="nav-menu" className={`nav-menu ${open ? 'open' : ''}`}>
            <li><Link href="/nos-services" onClick={close}>Nos prestations</Link></li>
            <li><Link href="/qui-sommes-nous" onClick={close}><span className="nowrap">Qui sommes‑nous ?</span></Link></li>
            <li><Link href="/nos-valeurs" onClick={close}>Nos valeurs</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
