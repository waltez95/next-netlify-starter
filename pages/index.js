
import Head from 'next/head'

export default function Home() {
  return (
    <div className="container" style={{ fontFamily: 'Arial', padding: '2rem' }}>
      <Head>
        <title>33ème Avenue - Salon de coiffure</title>
        <meta name="description" content="Tarifs, adresse et réseaux sociaux du salon 33ème Avenue à Gournay-sur-Marne" />
      </Head>

      <main>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '1.5rem' }}>
          Bienvenue chez 33ème Avenue
        </h1>

        <h2>📍 Adresse</h2>
        <p>33 avenue des Princes, 93460 Gournay-sur-Marne</p>

        <h2>📞 Téléphone</h2>
        <p>01 43 04 08 81</p>

        <h2>🕒 Horaires</h2>
        <ul>
          <li><strong>Lundi:</strong> 9h30 – 18h</li>
          <li><strong>Mardi - Mercredi:</strong> 9h30 – 19h</li>
          <li><strong>Jeudi - Vendredi:</strong> 9h – 19h</li>
          <li><strong>Samedi:</strong> 9h – 18h</li>
        </ul>

        <h2>💈 Tarifs et réservations :</h2>
        <div style={{ marginTop: '1rem', textAlign: 'center' }}>
         <a href="https://www.planity.com" target="_blank" title="Planity">
           <img src="data:image/png;base64,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" alt="Planity" style="width: 50px; height: 50px; borderRadius: '12px'" />
         </a>
        </div>


        <h3>Homme</h3>
        <ul>
          <li>Coupe homme : 27 €</li>
          <li>Couleur + shampoing : 48,50 €</li>
          <li>Shampoing coiffage : 16 €</li>
        </ul>

        <h3>Femme</h3>
        <ul>
          <li>Shampoing coupe brushing courts : 39 €</li>
          <li>Shampoing coupe brushing longs : 49 €</li>
        </ul>

        <h3>Enfant</h3>
        <ul>
          <li>Coupe brushing - fille -10 ans : 25 €</li>
          <li>Coupe brushing - garçon -10 ans : 19 €</li>
          <li>Coupe enfant -3 ans : 14 €</li>
        </ul>

        <h2>📲 Réseaux sociaux</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '1rem' }}>
          <a href="https://www.instagram.com/33rd_avenue_/" target="_blank" title="Instagram">
            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" style={{ width: '50px', height: '50px' }} />
          </a>
          <a href="https://www.tiktok.com/@33emavenue" target="_blank" title="TikTok">
            <img src="https://cdn-icons-png.flaticon.com/512/3046/3046120.png" alt="TikTok" style={{ width: '50px', height: '50px' }} />
          </a>
          <a href="https://www.facebook.com/33emeavenue" target="_blank" title="Facebook">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" style={{ width: '50px', height: '50px' }} />
          </a>
        </div>
      </main>
    </div>
  )
}
