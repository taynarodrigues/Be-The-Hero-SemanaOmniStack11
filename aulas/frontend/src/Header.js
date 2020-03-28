import React from 'react';

// export default function Header(props){ 
//     return (

//         // utilizando as chaves para injetar a variável 'props.title' do JavaScript e recebendo parâmetro 'props' dentro da propriedade Header
//         // <header>
//         //     <h1>{props.title}</h1>  
//         // </header>

//         //children -> propriedade criada de forma automática, retorna todo o conteúdo seja texto
//         <header>
//             <h1>{props.children}</h1>  
//         </header>
        
//     );
// }

// Fazendo uma desestruturação, através de chaves e citando quais propriedades queres obter
export default function Header({children}){ 
    return (
        //utiliza apenas a 'children' entre chaves
        <header>
            <h1>{children}</h1>  
        </header>
        
    );
}