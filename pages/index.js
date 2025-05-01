
import Head from 'next/head'

export default function Home() {
  return (
    <div className="container" style={{ fontFamily: 'Arial', padding: '2rem' }}>
      <Head>
        <title>33ème Avenue - Salon de coiffure</title>
        <meta name="description" content="Tarifs, adresse et réseaux sociaux du salon 33ème Avenue à Gournay-sur-Marne" />
      </Head>

      <main>
        <h1>Bienvenue chez 33ème Avenue</h1>

        <h2>📍 Adresse</h2>
        <p>33 avenue des Princes, 93460 Gournay-sur-Marne</p>

        <h2>💈 Tarifs</h2>
        <p><strong>Voir tous nos tarifs sur Planity :</strong> <a href="https://www.planity.com" target="_blank">Cliquez ici</a></p>

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

        <h2>📲 Réseaux & Réservations</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '1rem' }}>
          <a href="https://www.planity.com" target="_blank" title="Planity">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Planity_logo.svg/512px-Planity_logo.svg.png" alt="Planity" style={{ width: '50px', height: '50px' }} />
          </a>
          <a href="https://www.instagram.com/33rd_avenue_/" target="_blank" title="Instagram">
            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" style={{ width: '50px', height: '50px' }} />
          </a>
          <a href="https://www.tiktok.com/@33emeavenue" target="_blank" title="TikTok">
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
