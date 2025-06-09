import React from 'react';
import './Lebenslauf.css';

function Lebenslauf() {
  return (
    <div className="lebenslauf-container">
      <div className="lebenslauf-header">
        <h1>Ing. Aroua Sdiri</h1>
        <p>Hofackerzeile 1, 13627 Berlin</p>
        <p>E-Mail: <a href="mailto:arwasdiri1999@gmail.com">arwasdiri1999@gmail.com</a> | Telefon: +49 155 66080643</p>
        <p>
          <a href="https://www.linkedin.com/in/ing-aroua-sdiri/" target="_blank" rel="noopener noreferrer">
            LinkedIn-Profil ansehen
          </a>
        </p>
      </div>

      <Section title="Berufserfahrung">
        <Experience
          date="Seit Februar 2024"
          title="Konfiguratorin – MACH AG, Berlin"
          description="Softwarekonfiguration für Kundenlösungen im öffentlichen Bereich."
        />
        <Experience
          date="08/2023 – 01/2024"
          title="Full-Stack Web-Entwicklerin – Beyonity Group GmbH, Berlin"
          description="Entwicklung mit React, PHP, JavaScript, CSS, HTML."
        />
        <Experience
          date="04/2023 – 07/2023"
          title="Werkstudentin IT – B.B.S. Bauer’s Buildings Services GmbH, Berlin"
        />
        <Experience
          date="09/2022 – 03/2023"
          title="Webentwicklerin – Binschonda Hauptstadt-Pflegedienst GmbH, Berlin"
        />
        <Experience
          date="04/2022 – 08/2022"
          title="Praktikum – P3KI GmbH, Stuttgart"
        />
      </Section>

      <Section title="Bildung">
        <EduItem date="2020–2023" title="B.Eng. Technische Informatik, BHT Berlin" />
        <EduItem date="2019–2020" title="Deutschkurse, Goethe-Institut Mannheim" />
        <EduItem date="2014–2018" title="Abitur, Gymnasium Ibn Mandhour, Tunesien" />
      </Section>

      <Section title="Projekte">
        <p><strong>Bachelorarbeit:</strong> Optimierung der Arzt-Roboter-Interaktion</p>
        <p>
          <a href="https://gitlab.bht-berlin.de/s85150/ba23.git" target="_blank" rel="noopener noreferrer">GitLab-Projekt</a> &nbsp;|&nbsp;
          <a href="https://github.com/arouasdiri/AS-Interactive-HealthTech" target="_blank" rel="noopener noreferrer">GitHub-Link</a>
        </p>
      </Section>

      <Section title="Technologien & Tools">
        <p>React, Vue.js, PHP, Python, Node.js, Laravel, Docker, HTML, CSS, JavaScript, MongoDB, MySQL, WordPress, Git, Linux</p>
      </Section>

      <Section title="Sprachen">
        <p>Deutsch (Fließend), Englisch (Fortgeschritten), Französisch & Arabisch (Muttersprache)</p>
      </Section>

      <Section title="Interessen">
        <p>Webentwicklung, UI/UX Design, KI, Reisen, Sport, Kochen</p>
      </Section>

      <Section title="Führerschein">
        <p>Klasse B</p>
      </Section>
    </div>
  );
}

// Wiederverwendbare Komponenten
const Section = ({ title, children }) => (
  <section className="lebenslauf-section">
    <h2>{title}</h2>
    <div>{children}</div>
  </section>
);

const Experience = ({ date, title, description }) => (
  <div className="experience-item">
    <p><strong>{date}:</strong> {title}</p>
    {description && <p className="experience-desc">{description}</p>}
  </div>
);

const EduItem = ({ date, title }) => (
  <p><strong>{date}:</strong> {title}</p>
);

export default Lebenslauf;
