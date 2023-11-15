import { useState } from 'react'
import Axios from 'axios';
import './App.css'

function App() {
  // Stanje za pohranu podataka iz backend-a
  const [data, setData] = useState(null);
  // Stanje za pohranu eventualnih grešaka prilikom dohvaćanja podataka
  const [error, setError] = useState(null);

  // Funkcija za dohvaćanje podataka s backend-a
  const fetchDataFromBackend = async () => {
    try {
      // Slanje HTTP GET zahtjeva na backend endpoint
      const response = await fetch('URL'); // Zamijeni URL s odgovarajućim URL-om tvog backend servera

      // Provjera status koda odgovora
      if (response.ok) {
        // Ako je odgovor uspješan, parsiraj JSON odgovor
        const result = await response.json();
        // Postavi podatke u stanje
        setData(result);
      } else {
        // Ako odgovor nije uspješan, postavi grešku u stanje
        setError('Nešto je pošlo po zlu prilikom dohvaćanja podataka.');
      }
    } catch (error) {
      // Uhvati i postavi grešku u stanje u slučaju bilo kakve druge greške
      setError('Greška prilikom obrade zahtjeva:', error);
    }
  };

  return (
    <>
      <div className="card">
        <button onClick={fetchDataFromBackend()}>
          Klinkni me!
        </button>
      </div>

      {/* Prikaz podataka ako su dostupni */}
      {data && (
        <div className="data-container">
          {/* Ovdje prikaži podatke kako želiš */}
          <p>{data.exampleProperty}</p>
        </div>
      )}

      {/* Prikaz greške ako se dogodi */}
      {error && <p className="error-message">{error}</p>}
    </>
  )
}

export default App
