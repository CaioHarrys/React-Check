import React from 'react';

// Temos as props aqui, abaixo vamos editar o componente, aonde que vamos botar as props no lugar do texto fixo.
function Greeting({name, curso, semestre}) {
  return (
    <div>
        <p>
            Olá, <strong>{name}</strong>! Seja bem-vindo(a) formatura do curso <strong>{curso}</strong> ao final do <strong>{semestre}</strong> do ano de 2025. 
        </p>
    </div>
  );
}

// exportamos o componente para que possa ser utilizado no App.jsx
export default Greeting;