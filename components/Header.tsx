"use client";

import { useEffect, useState } from "react";
import { nav, site } from "@/lib/content";
import { Icon } from "./Icon";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#top" className="brand" aria-label="Apexnet home">
          <span className="brand-name">{site.name}</span>
          <span className="brand-desc">{site.descriptor}</span>
        </a>

        <nav aria-label="Primary" className={`nav ${open ? "is-open" : ""}`} id="primary-nav">
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="btn btn-primary header-cta">
          Contact Us
        </a>

        <button
          type="button"
          className="menu-btn"
          aria-expanded={open}
          aria-controls="primary-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
      </div>
    </header>
  );
}
