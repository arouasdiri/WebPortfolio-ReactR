// Details.js
import React from 'react';
import { Link } from 'react-router-dom';
import Lebenslauf from './Lebenslauf'; // Importez votre composant CV

function Details() {
  return (
    <div>
      <h2>Lebenslauf</h2>
      <Lebenslauf />
      <Link to="/" className="details-link">Zurück zur Startseite</Link>
    </div>
  );
}

export default Details;
