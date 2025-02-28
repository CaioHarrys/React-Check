import { useState } from 'react'
import Greeting from '../src/components/Greeting.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Saudações aos Formandos</h1>
        <Greeting name="Caio" curso="Analise e Desenvolvimento de Software" semestre="Primeiro"/>
        <Greeting name="Pedro" curso="Analise de Risco" semestre="Segundo"/>
        <Greeting name="Juana" curso="Biomedicina" semestre="Segundo"/>
        <Greeting name="Raiane" curso="Farmacia" semestre="Primeiro"/>
      </div>
    </>
  )
}

export default App
