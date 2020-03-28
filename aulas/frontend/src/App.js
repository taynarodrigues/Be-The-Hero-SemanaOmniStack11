import React from 'react';

import Header from './Header';

function App() {
  return(
    // customizando utilizando a propriedade title 
    // <Header title = "Semana OmniStack" />  
    

    //retorna todo o conteúdo do texto 'Semana OmniStack' através da propriedade children de forma automática,
    <Header>
      Semana OmniStack
    </Header>
  );
}

export default App;
