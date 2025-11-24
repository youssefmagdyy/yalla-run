import React, { useEffect, useRef } from "react";
import "./App.css";

const LOGO = "yallaLogo.jpg";

const RUNNERS = [
  "/runner1.jpg",
  "/runner2.jpg",
  "/runner1.jpg",
  "/runner2.jpg",
  "/runner1.jpg",
  "/runner2.jpg",
];

function useScrollReveal(selector = ".reveal", options = {}) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(selector));
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, ...options }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [selector, options]);
}

export default function App() {
  // apply scroll reveal to sections and cards
  useScrollReveal(".reveal");

  // duplicate images for seamless marquee
  const marqueeImages = [...RUNNERS, ...RUNNERS];

  // refs for pause on hover (optional)
  const marqueeRef = useRef(null);

  return (
    <div className="site">
      {/* NAV */}
      <header className="nav">
        <div className="nav-left">
          <img src={LOGO} alt="YALLA logo" className="nav-logo" />
        </div>

        <nav className="nav-right" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#run">Run</a>
          <a href="#partners">Partners</a>
          <a href="#community" className="nav-cta">Join</a>
        </nav>
      </header>

      {/* HERO (100vh) */}
      <section className="hero">
        <div className="hero-inner">
          <h1 className="hero-title">YALLA</h1>
          <p className="hero-sub">Adventure and connection</p>

          {/* thin film-strip: marquee */}
          <div
            className="film-strip"
            onMouseEnter={() => marqueeRef.current && (marqueeRef.current.style.animationPlayState = "paused")}
            onMouseLeave={() => marqueeRef.current && (marqueeRef.current.style.animationPlayState = "running")}
          >
            <div
              className="film-track"
              ref={marqueeRef}
              style={{ ["--items"]: marqueeImages.length }}
              aria-hidden="true"
            >
              {marqueeImages.map((src, i) => (
                <div key={i} className="film-frame" style={{ backgroundImage: `url(${src})` }} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT + MOSAIC */}
      <section id="about" className="about-section reveal">
        <div className="about-inner">
          <div className="about-left">
            <h2 className="section-title">Where active spirits come alive.</h2>

            <p className="body-text">
              Whether you run, hike, climb, or whatever gets you pushing forward:
              Yalla is your community for adventure and connection.
            </p>

            <p className="body-text muted">
              Born in Paris with Egyptian roots, YALLA brings creatives and athletes
              together for weekly movement, exploration, and shared experiences.
            </p>
          </div>

          <div className="mosaic">
            <div className="mosaic-col">
              <div className="mosaic-item tall" style={{ backgroundImage: `url(${RUNNERS[1]})` }} />
              <div className="mosaic-item" style={{ backgroundImage: `url(${RUNNERS[2]})` }} />
            </div>

            <div className="mosaic-col">
              <div className="mosaic-item wide" style={{ backgroundImage: `url(${RUNNERS[3]})` }} />
              <div className="mosaic-grid">
                <div className="mosaic-item" style={{ backgroundImage: `url(${RUNNERS[4]})` }} />
                <div className="mosaic-item" style={{ backgroundImage: `url(${RUNNERS[5]})` }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WEEKLY RUN + ROUTE */}
      <section id="run" className="run-section reveal">
        <div className="run-inner">
          <div className="run-block">
            <h2 className="section-title red">Weekly Run</h2>
            <p className="body-text muted">Every Sunday • Same time • Same route</p>

            <ul className="info-list">
              <li><strong>When:</strong> Sundays 10:00</li>
              <li><strong>Meet:</strong> Canal Saint-Martin (east bridge)</li>
              <li><strong>Distance:</strong> ~7 km loop</li>
              <li><strong>Vibe:</strong> All levels welcome</li>
            </ul>
          </div>

          <div className="route-block">
            <h2 className="section-title red">Route</h2>
            <p className="body-text muted">YALLA Sunday Loop — scenic and social.</p>

            <div className="route-map">Map coming soon</div>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section id="partners" className="partners-section reveal">
        <div className="partners-inner">
          <h2 className="section-title red">Partners</h2>

          <div className="partner">
            <div className="partner-img" style={{ backgroundImage: `url(${RUNNERS[2]})` }} />
            <div className="partner-info">
              <h3 className="partner-name">Café Compagnon</h3>
              <p className="body-text muted">10 percent off for YALLA members. Just say you're with the club.</p>
              <a href="#" className="partner-link">View on Instagram</a>
            </div>
          </div>
        </div>
      </section>

      {/* COMMUNITY */}
      <section id="community" className="community-section reveal">
        <div className="community-inner">
          <h2 className="section-title red">Community</h2>
          <p className="body-text">
            Running, hiking, climbing, cycling — movement meets connection.
          </p>

          <div className="chip-row">
            <span className="chip">Running</span>
            <span className="chip">Hiking</span>
            <span className="chip">Climbing</span>
            <span className="chip">Cycling</span>
          </div>

          <div className="join-row">
            <a href="#" className="join primary">Join WhatsApp</a>
            <a href="#" className="join secondary">Join Strava</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div>© {new Date().getFullYear()} YALLA</div>
        <div className="footer-links">
          <a href="#">Instagram</a>
          <a href="#">Strava</a>
        </div>
      </footer>
    </div>
  );
}