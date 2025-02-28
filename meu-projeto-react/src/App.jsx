import { useState } from 'react'
import Greeting from '../src/components/Greeting.jsx'
import {  } from "module";
import Counter from './components/Counter.jsx'
import'./assets/css/style.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Saudações aos Formandos</h1>
        {/* Abaixo chamamos o componente Greeting, botamos os props com seus valores de obejetos, os quais utilizaremos no arquivo do componete para chamarmos. Assim utilizando o mesmo componente, porem com valores diferentes sem ter que escrever muito né */}
        <Greeting name="Caio" curso="Analise e Desenvolvimento de Software" semestre="Primeiro"/>
        <Greeting name="Pedro" curso="Analise de Risco" semestre="Segundo"/>
        <Greeting name="Juana" curso="Biomedicina" semestre="Segundo"/>
        <Greeting name="Raiane" curso="Farmacia" semestre="Primeiro"/>
      </div>
      <div>
        <Counter />
      </div>
    </>
  )
}

export default App
