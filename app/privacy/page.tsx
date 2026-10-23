import type { Metadata } from "next";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Apexnet",
  description: "How the Apexnet website handles visitor information.",
};

export default function Privacy() {
  return (
    <>
      <header className="header">
        <div className="container header-inner">
          <a href="/" className="brand" aria-label="Apexnet home">
            <span className="brand-name">APEXNET</span>
            <span className="brand-desc">Software Development &amp; Digital Infrastructure</span>
          </a>
          <a href="/" className="btn btn-ghost header-cta">Back to home</a>
        </div>
      </header>
      <main className="container legal">
        <h1>Privacy Policy</h1>
        <p className="footer-muted">Apexnet is powered by Hinata Concepts.</p>
        <h2>Information we collect</h2>
        <p>
          This website does not collect personal information from visitors. It has no accounts, no
          forms and no database, and it does not set advertising or tracking cookies.
        </p>
        <h2>Analytics and tracking</h2>
        <p>
          We do not run analytics or third-party tracking scripts on this website. Like most hosted
          websites, our hosting provider may keep standard technical server logs (such as IP address
          and browser type) for security and reliability purposes.
        </p>
        <h2>Contacting us</h2>
        <p>
          If you contact us by phone or WhatsApp, the information you share is handled through that
          service under its own terms and privacy policy. We use it only to respond to your enquiry.
        </p>
        <h2>External links</h2>
        <p>
          This website links to external sites, such as the projects listed on it. We are not
          responsible for the privacy practices of those sites.
        </p>
        <h2>Changes</h2>
        <p>If our practices change, we will update this page.</p>
      </main>
      <Footer />
    </>
  );
}
