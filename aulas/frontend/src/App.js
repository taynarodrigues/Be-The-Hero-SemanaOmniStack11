// import React, { useState} from 'react'; //importar 'useState' para converter o código usando um estado

// import Header from './Header';

// function App(){

//     /*Estado:
//         O método useState, retorna um array com duas posições
//         Array [valor, funcaoDeAtualizacao]*/
//     /*Imutabilidade:
//          Dentro do React por questão de performance nunca pode manipular a váriavel do estado,
//          o valor do estado de uma forma direta, não pode alterar o valor de uma forma direta,
//         para isso precisase sobrepor a váriavel do estado*/
  
//   const [counter, setCounter] = useState(0); 

//   function increment(){
//     setCounter(counter + 1); // o valor anterior + 1.
//     console.log(counter);
//   }

//   return(
//     /*Toda vez q o componente armazenar uma informação dentro dele, criaremos sempre um estado
//     pois assim consegue-se atualiar a informação e reflete dentro da interface*/ 
//     <div>
//       <Header>Contador: {counter}</Header>
//       <button onClick={increment}>Incrementar</button> 
//     </div>
//   );
// }
// export default App;


import React from 'react';

import './global.css'

// import Logon from './pages/Logon';
import Routes from './routes';

function App(){
  return(
    // <Logon/>
    <Routes/>
  );
}

export default App;
