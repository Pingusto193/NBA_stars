import { useState } from 'react'
import lebronJamesImg from './assets/Lebron James.webp'
import stephenCurryImg from './assets/Stephen Curry.webp'
import giannisImg from './assets/Giannis Antetokounmpo.webp'
import lukaDoncicImg from './assets/Luka Dončić.webp'
import nikolaJokicImg from './assets/Nikola Jokić.webp'
import jaysonTatumImg from './assets/Jayson Tatum.webp'
import './App.css'

const jogadoresIniciais =
[ { id: 1, nome: "LeBron James", foto: lebronJamesImg },
  { id: 2, nome: "Stephen Curry", foto: stephenCurryImg },
  { id: 3, nome: "Giannis Antetokounmpo", foto: giannisImg },
  { id: 4, nome: "Luka Dončić", foto: lukaDoncicImg },
  { id: 5, nome: "Nikola Jokić", foto: nikolaJokicImg },
  { id: 6, nome: "Jayson Tatum", foto: jaysonTatumImg } ];

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header>
      <h1>NBA Astros Gallery</h1>
    </header>

    <main className="gallery">
      {jogadoresIniciais.map((jogador) => (
        <div className="card" key={jogador.id}>
          <img src={jogador.foto} alt={jogador.nome} />
          <h2>{jogador.nome}</h2>
        </div>
      ))}
    </main>
    </>
  )
}

export default App
