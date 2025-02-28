// Importar React e o hook useState
import React, { useState } from 'react';

// Definir o componente Counter
function Counter() {
  // Criar um estado para o contador, começando em 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Contador: {count}</h2>
      {/* Botão para incrementar */}
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      {/* Botão para decrementar */}
      <button onClick={() => setCount(count - 1)}>Decrementar</button>
      {/* Botão para resetar */}
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

// Exportar o componente para ser usado em outros lugares
export default Counter;