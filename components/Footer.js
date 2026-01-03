export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="footer-bandeau container">
        <div className="footer-col socials">
          <h4>Nos réseaux</h4>
          <ul className="social-icons">
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.3 2.4.5.6.3 1 .6 1.5 1.1.5.5.8.9 1.1 1.5.2.5.4 1.2.5 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.5 2.4-.3.6-.6 1-1.1 1.5-.5.5-.9.8-1.5 1.1-.5.2-1.2.4-2.4.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.4-.5-.6-.3-1-.6-1.5-1.1-.5-.5-.8-.9-1.1-1.5-.2-.5-.4-1.2-.5-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.9.5-2.4.3-.6.6-1 1.1-1.5.5-.5.9-.8 1.5-1.1.5-.2 1.2-.4 2.4-.5C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3 0-3.3 0-4.5.1-.9.1-1.4.2-1.8.4-.5.2-.8.4-1.1.7-.3.3-.5.6-.7 1.1-.2.4-.3 1-.4 1.8-.1 1.1-.1 1.5-.1 4.5s0 3.3.1 4.5c.1.9.2 1.4.4 1.8.2.5.4.8.7 1.1.3.3.6.5 1.1.7.4.2.9.3 1.8.4 1.1.1 1.5.1 4.5.1s3.3 0 4.5-.1c.9-.1 1.4-.2 1.8-.4.5-.2.8-.4 1.1-.7.3-.3.5-.6.7-1.1.2-.4.3-.9.4-1.8.1-1.1.1-1.5.1-4.5s0-3.3-.1-4.5c-.1-.9-.2-1.4-.4-1.8-.2-.5-.4-.8-.7-1.1-.3-.3-.6-.5-1.1-.7-.4-.2-.9-.3-1.8-.4-1.2-.1-1.5-.1-4.5-.1zM12 7.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8zm0 1.8a3.1 3.1 0 1 0 0 6.2 3.1 3.1 0 0 0 0-6.2zm5-1.9a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2z"/></svg>
              </a>
            </li>
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M22 12.1C22 6.6 17.5 2 12 2S2 6.6 2 12.1c0 5 3.7 9.1 8.5 9.9v-7h-2.6v-2.9H10.5V9.5c0-2.6 1.6-4 3.9-4 1.1 0 2.3.2 2.3.2v2.5h-1.3c-1.3 0-1.7.8-1.7 1.6v1.9h2.9l-.5 2.9h-2.4v7C18.3 21.2 22 17.1 22 12.1z"/></svg>
              </a>
            </li>
            <li>
              <a href="https://pinterest.com" target="_blank" rel="noopener" aria-label="Pinterest">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M12 2c-4.9 0-9 4-9 8.9 0 3.9 2.4 7.3 5.9 8.4-.1-.7-.2-1.8 0-2.6.2-.6 1.3-4.3 1.3-4.3s-.4-.8-.4-2.1c0-2 1.2-3.5 2.7-3.5 1.3 0 1.9 1 1.9 2.2 0 1.3-.8 3.2-1.2 4.9-.3 1.5.7 2.7 2.1 2.7 2.5 0 4.4-3.1 4.4-7.7C21 6 17.1 2 12 2z"/></svg>
              </a>
            </li>
            <li>
              <a href="https://youtube.com" target="_blank" rel="noopener" aria-label="YouTube">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M23.5 6.2s-.2-1.7-.8-2.4c-.8-.9-1.7-.9-2.1-1C17.7 2.4 12 2.4 12 2.4s-5.7 0-8.6.4c-.4 0-1.4.1-2.1 1-.6.7-.8 2.4-.8 2.4S0 8 0 9.8v2.4C0 14.9.3 16.6.3 16.6s.2 1.7.8 2.4c.8.9 1.9.9 2.4 1 1.7.3 7.6.4 7.6.4s5.7 0 8.6-.4c.4 0 1.4-.1 2.1-1 .6-.7.8-2.4.8-2.4s.3-1.7.3-3.4V9.8c0-1.8-.3-3.6-.3-3.6zM9.8 15.1V8.8l6.3 3.1-6.3 3.2z"/></svg>
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-col newsletter">
          <h4>Newsletter</h4>
          <p>Inscrivez-vous pour suivre nos restaurations et offres exclusives.</p>
          <form className="footer-newsletter-form" onSubmit={(e)=>e.preventDefault()}>
            <input type="email" placeholder="Votre email" aria-label="Votre email" />
            <button type="submit">S'inscrire</button>
          </form>
        </div>

        <div className="footer-col contact">
          <h4>Nous contacter</h4>
          <p>
            <a href="mailto:info@la-malle-en-coin.com">info@la-malle-en-coin.com</a>
          </p>
          <p className="contact-phone">
            <a href="tel:+33388932823">+33 (0)3 88 93 28 23</a>
          </p>
        </div>
      </div>

    </footer>
  )
}
