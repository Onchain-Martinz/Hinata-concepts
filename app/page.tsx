import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Icon } from "@/components/Icon";
import { contact, projects, services } from "@/lib/content";

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <Header />
      <main id="main">
        {/* Hero */}
        <section id="top" className="hero">
          <div className="container hero-inner">
            <p className="eyebrow">SOFTWARE DEVELOPMENT &amp; DIGITAL INFRASTRUCTURE</p>
            <p className="powered">Powered by Hinata Concepts</p>
            <h1>We build, modernize and manage digital systems.</h1>
            <p className="lead">
              We build websites, institutional portals and custom software solutions that help
              organizations operate, communicate and grow.
            </p>
            <div className="actions">
              <a href="#projects" className="btn btn-primary">Explore Our Work</a>
              <a href="#contact" className="btn btn-ghost">Contact Us</a>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section id="services" className="section">
          <div className="container">
            <div className="section-head">
              <h2>What We Do</h2>
              <p>
                Practical digital solutions for organizations ready to build, improve and maintain
                the systems they depend on.
              </p>
            </div>
            <ul className="grid grid-4 cards">
              {services.map((s) => (
                <li key={s.title} className="card">
                  <span className="icon-box"><Icon name={s.icon} /></span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Selected Projects */}
        <section id="projects" className="section section-tint">
          <div className="container">
            <div className="section-head">
              <h2>Selected Projects</h2>
              <p>
                A selection of digital projects demonstrating our work in academic publishing and
                institutional web development.
              </p>
            </div>
            <ul className="grid grid-2 cards">
              {projects.map((p) => (
                <li key={p.name} className="card project">
                  <div className="shot">
                    {p.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={p.image} alt={p.alt ?? ""} width={1024} height={641} loading="lazy" decoding="async" />
                    ) : (
                      <div className="shot-placeholder"><Icon name="image" size={28} /><span>Screenshot coming soon</span></div>
                    )}
                  </div>
                  <div className="project-body">
                    <h3>{p.name}</h3>
                    <p>{p.text}</p>
                    <a href={p.url} target="_blank" rel="noopener noreferrer" className="link-arrow">
                      Visit Website <span className="sr-only">(opens {p.name} in a new tab)</span>
                      <Icon name="arrow" size={18} />
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* About */}
        <section id="about" className="section">
          <div className="container about">
            <h2>About Apexnet</h2>
            <div className="prose">
              <p>Apexnet is a software development and digital infrastructure brand powered by Hinata Concepts.</p>
              <p>
                We help institutions, organizations and businesses build new digital solutions,
                modernize outdated systems and maintain the technology they depend on.
              </p>
              <p>
                Our approach is simple: understand the problem, build the right solution and create
                systems designed to last.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section id="mission" className="section section-tint">
          <div className="container grid grid-2 mv">
            <div className="mv-block">
              <p className="eyebrow">OUR MISSION</p>
              <p className="mv-text">
                To help institutions and organizations modernize outdated digital systems, build
                reliable and long-lasting digital infrastructure, and develop practical software
                solutions that improve how they operate.
              </p>
            </div>
            <div className="mv-block">
              <p className="eyebrow">OUR VISION</p>
              <p className="mv-text">
                To contribute to a future where African institutions and businesses have access to
                modern, scalable and dependable digital infrastructure that enables innovation,
                growth and lasting impact.
              </p>
            </div>
          </div>
        </section>

        {/* Apex */}
        <section id="apex" className="section">
          <div className="container">
            <div className="apex">
              <div>
                <span className="badge">Coming Soon</span>
                <h2>Introducing Apex</h2>
                <p className="apex-sub">Course representative operations, simplified.</p>
              </div>
              <div>
                <p>
                  Apex is a WhatsApp-first tool in development, designed to help university course
                  representatives manage textbook payments, student payment records and related
                  course administration.
                </p>
                <p className="apex-note">A product by Hinata Concepts.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="section section-tint">
          <div className="container contact">
            <div>
              <h2>Have a project in mind?</h2>
              <p className="lead">Let&apos;s discuss how Apexnet can help your organization.</p>
            </div>
            <div className="contact-options">
              <a href={contact.whatsappHref} target="_blank" rel="noopener noreferrer" className="contact-item">
                <span className="icon-box"><Icon name="whatsapp" /></span>
                <span>
                  <span className="contact-label">WhatsApp</span>
                  <span className="contact-value">{contact.whatsappDisplay}</span>
                </span>
              </a>
              <a href={contact.otherHref} className="contact-item">
                <span className="icon-box"><Icon name="phone" /></span>
                <span>
                  <span className="contact-label">Additional business contact</span>
                  <span className="contact-value">{contact.other}</span>
                </span>
              </a>
              <a href={contact.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-block">
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
