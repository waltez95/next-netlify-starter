import Head from 'next/head'

export default function Home() {
  return (
    <div className="container" style={{ fontFamily: 'Arial', padding: '2rem' }}>
      <Head>      
  <title>33ème Avenue - Salon de coiffure</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Tarifs, adresse et réseaux sociaux du salon 33ème Avenue à Gournay-sur-Marne" />
    <style>
        body, html {
            margin-top: 10px;
            padding: 0;
            width: 100%;
            heigth: 100%;
            overflow-x: hidden;
        }
        main {
            padding-top: 100px;
            margin-top: 20px;
        }
    </style>
  </Head>


  
  <main>
        
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
            <img src="https://cdn6.aptoide.com/imgs/c/0/6/c063625873b06a876ef056391f4286fe_icon.png" alt="Planity" style={{ width: '50px', height: '50px', borderRadius: '12px' }} />
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
