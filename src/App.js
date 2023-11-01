import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Details from './Details';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <header>
          <h1>Willkommen bei ReactR</h1>
        </header>
        <nav>
          <Link to="/">Startseite</Link>
          <Link to="/details">Details</Link>
        </nav>
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details" element={<Details />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Willkommen auf der Startseite</h2>
      <section>
        <h3>Über mich</h3>
          <p>
            Mein Name ist Aroua Sdiri, und als passionierte Full-Stack Web-Entwicklerin widme ich mich stets neuen Herausforderungen in der Welt der Technologie. Mit einem Abschluss in technischer Informatik und Embedded Systems von der BHT Hochschule in Berlin bringe ich sowohl akademisches Wissen als auch praktische Erfahrung mit.
          </p>

          <h4>Aktuelle Position</h4>
          <p>
            Bei der Beyonity Group GmbH trage ich maßgeblich zur Entwicklung und Gestaltung innovativer Webseiten bei. Meine Expertise reicht von Programmiersprachen wie PHP, Python, HTML und CSS bis hin zu Datenbankdesign und -entwicklung.
          </p>

          <h4>Technologische Expertise und Interessen</h4>
          <p>
            Besonders fasziniert bin ich von der Schnittstelle zwischen Softwareentwicklung und zukunftsweisenden Technologien. Ein Beispiel hierfür ist meine Bachelorarbeit, die sich mit der Optimierung der Interaktion zwischen Ärzten und autonomen chirurgischen Robotern befasst.
          </p>
      
          <h4>Meine Vision und Ziele</h4>
          <p>
            Ich bin stets bestrebt, meine Fähigkeiten zu erweitern und freue mich darauf, mein Wissen und meine Leidenschaft für Technologie und Entwicklung in Ihrem Team einzubringen.
          </p>

      </section>

      <section>
        <h3>Kontakt</h3>
        <p>Ich freue mich über Ihr Interesse an meiner Arbeit und stehe für weitere Informationen und berufliche Anfragen zur Verfügung. Sie können mich wie folgt erreichen:</p>
        
        <div className="contact">
          
          <p><strong>E-Mail:</strong> <a href="mailto:arwasdiri1999@gmail.com">arwasdiri1999@gmail.com</a></p>
          <p><strong>Telefon:</strong> +33 6 51 94 69 92</p>
          <p><strong>XING-Profil:</strong> <a href="https://www.xing.com/profile/aroua_sdiri" target="_blank" rel="noopener noreferrer">xing.com/profile/aroua_sdiri</a></p>
          <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/aroua-sdiri-642283234/" target="_blank" rel="noopener noreferrer">linkedin.com/in/aroua-sdiri-642283234</a></p>
          <p><strong>GitHub:</strong> <a href="[Ihr GitHub-Profil-Link]" target="_blank" rel="noopener noreferrer">Ihr GitHub-Profil</a></p>
        </div>

        
        <p>Ich freue mich darauf, von Ihnen zu hören!</p>
      </section>
    </div>
  );
}

export default App;
