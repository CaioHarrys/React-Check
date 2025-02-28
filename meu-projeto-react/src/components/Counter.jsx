import React, { useState } from 'react';
function Counter() {
  const [count, setCount] = useState(0)
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