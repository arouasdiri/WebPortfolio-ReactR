import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Details from './Details';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details" element={<Details />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

function Header() {
  return (
    <header className="app-header">
      <h1>Willkommen bei ReactR</h1>
      <p>Entwickelt von Aroua Sdiri</p>
    </header>
  );
}

function Navigation() {
  return (
    <nav className="app-nav">
      <Link to="/">Startseite</Link>
      <Link to="/details">Details</Link>
    </nav>
  );
}

function Home() {
  return (
    <div className="home-section">
      <section>
        <h2>Über mich</h2>
        <p>
          Ich bin Aroua Sdiri – leidenschaftliche Full-Stack-Entwicklerin mit einem Abschluss in Technischer Informatik – Embedded Systems von der BHT Berlin.
          Mein Fokus liegt auf modernen Technologien, Innovation und kreativen Lösungen.
        </p>
      </section>

      <section>
        <h3>Aktuelle Position</h3>
        <p>
          Seit Februar 2024 bin ich als Konfiguratorin bei der MACH AG tätig. Zuvor war ich bei der Beyonity Group GmbH als Full-Stack Entwicklerin mit React, PHP und JavaScript aktiv.
        </p>
      </section>

      <section>
        <h3>Technologien & Vision</h3>
        <p>
          Besonders interessiert mich die Schnittstelle zwischen Softwareentwicklung und Zukunftstechnologien – z. B. KI, Robotik & MedTech.  
          In meiner Bachelorarbeit entwickelte ich eine Lösung zur Interaktion zwischen Ärzten und autonomen chirurgischen Robotern.
        </p>
      </section>

      <section>
        <h3>Kontakt</h3>
        <p>Sie können mich gern kontaktieren:</p>
        <div className="contact">
          <p><strong>E-Mail:</strong> <a href="mailto:arwasdiri1999@gmail.com">arwasdiri1999@gmail.com</a></p>
          <p><strong>Telefon:</strong> 015566080643</p>
          <p><strong>XING:</strong> <a href="https://www.xing.com/profile/aroua_sdiri" target="_blank" rel="noopener noreferrer">Mein Profil</a></p>
          <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/aroua-sdiri-642283234/" target="_blank" rel="noopener noreferrer">LinkedIn-Profil</a></p>
          <p><strong>GitHub:</strong> <a href="https://github.com/arouasdiri" target="_blank" rel="noopener noreferrer">GitHub-Repository</a></p>
        </div>
      </section>
    </div>
  );
}

export default App;
