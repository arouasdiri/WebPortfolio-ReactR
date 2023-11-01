import React from 'react';
import './Lebenslauf.css'; 

function Lebenslauf() {
  return (
    <div className="container">
        <div className="header">
            <h1>Aroua Sdiri</h1>
            <div className="contact-info">
                <p>geb. 20.05.1999, Tunis</p>
                <p>E-Mail: arwasdiri1999@gmail.com | Tel: +33 6 51 94 69 92</p>
                <p>Anschrift: Spandauer Damm 136, 14050 Berlin, Deutschland</p>
                <p>XING: <a href="https://www.xing.com/profile/aroua_sdiri">xing.com/profile/aroua_sdiri</a></p>
            </div>
        </div>

        <div className="section">
            <h2 className="section-title">Berufliche Laufbahn</h2>
            <p>August 2023 - Heute: Full-Stack Web-Developerin, Beyonity Group GmbH</p>
            <p>April 2023 - Juli 2023: Werkstudent im Unternehmensbereich IT & Softwareentwicklung, B.B.S. Bauer’s Buildings Services GmbH</p>
            <p>September 2022 - März 2023: Web Developer, Binschonda Hauptstadt-Pflegedienst GmbH</p>
            <p>April 2022 - August 2022: Software-Entwickler, P3KI GmbH</p>
        </div>

        <div className="section">
            <h2 className="section-title">Bildungsweg</h2>
            <p>April 2020 bis Heute: Bachelor in Technische Informatik-Embedded Systems, BHT Hochschule -Berlin</p>
            <p>März 2019 bis März 2020: Deutschsprachige Diplome, Goethe Institut Mannheim</p>
            <p>Juni 2014 bis Juni 2018: Abitur in Mathematik, Gymnasium Ibn Mandhour</p>
        </div>

        <div className="section">
            <h2 className="section-title">Projekte</h2>
            <p>15 Mai bis 15 September 2023: Bachelorarbeit - Verbesserung der Arzt-Roboter-Interaktion für effiziente Wundparameterübertragung</p>
            <p>GitLab-Link: <a href="https://gitlab.bht-berlin.de/s85150/ba23.git">gitlab.bht-berlin.de/s85150/ba23.git</a></p>
        </div>

        <div className="section">
            <h2 className="section-title">Fähigkeiten</h2>
            <p>Python, CSS, HTML, Linux, NoSQL, JavaScript, Git, Frontend-Entwicklung, Docker, Ubuntu, Vue.js, Wordpress, Laravel, SQL, C#, React, Angular, php, MongoDB</p>
        </div>

        <div className="section">
            <h2 className="section-title">Kenntnisse & Fähigkeiten</h2>
            <p>Sprachen: Englisch (Fortgeschrittene), Französisch (Experten), Arabisch (Muttersprache), Deutsch (Fließend)</p>
            <p>Kenntnisse in: Python, CSS, HTML, Linux, NoSQL, JavaScript, Git, Frontend-Entwicklung, Docker, Ubuntu, Vue.js</p>
            <p>Erfahrung in: Wordpress, Laravel, SQL, Docker, HTML, CSS, JavaScript, Vue.js, Linux, C#, React, Angular, php, MongoDB</p>
        </div>

        <div className="section">
            <h2 className="section-title">Interessen</h2>
            <p>Programmierung, Webdesign, Reisen, Sport, Kochen</p>
        </div>

        <div className="section">
            <h2 className="section-title">Führerschein</h2>
            <p>Klasse B</p>
        </div>
    </div>
  );
}

export default Lebenslauf;
