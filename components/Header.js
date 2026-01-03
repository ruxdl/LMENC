import Link from 'next/link'
import {useState} from 'react'
export default function Header(){
  const [open,setOpen] = useState(false)
  const toggle = ()=> setOpen(s=>!s)
  const close = ()=> setOpen(false)

  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand">
          <img src="/assets/img/logo.png" alt="La Malle en Coin" className="logo"/>
          <h1 className="site-title">La Malle en Coin</h1>
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
