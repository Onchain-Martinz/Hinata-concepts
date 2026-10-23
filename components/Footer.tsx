export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <p className="brand-name">APEXNET</p>
          <p className="footer-desc">Software Development &amp; Digital Infrastructure</p>
          <p className="footer-muted">Powered by Hinata Concepts</p>
          <p className="footer-muted">Business identity: Hinata Concepts</p>
        </div>
        <nav aria-label="Footer">
          <ul>
            <li><a href="/#services">Services</a></li>
            <li><a href="/#projects">Projects</a></li>
            <li><a href="/#about">About</a></li>
            <li><a href="/#contact">Contact</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </nav>
      </div>
      <div className="container footer-bottom">
        <p>© {year} Hinata Concepts. All rights reserved.</p>
      </div>
    </footer>
  );
}
