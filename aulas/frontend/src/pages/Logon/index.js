
   //Emmet e suas habilidades maravilhosas:
    // .div.logon-container -> ao digitar no topo da pagina -> aperte Tab
    // .section.form -> ao digitar no topo da pagina -> aperte Tab
    // import { FiLogIn } from 'react-icons/fa';  <FiLogIn size={16} color="#E02041"/>Não Tenho cadastro

import React, { useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import './styles.css';

import api from '../../services/api';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Logon(){
  const [id, setId] = useState('');
  const history = useHistory(); // enviar para o usuário a rota com o nome 'profile', no caso onde tem a listagem dos 'Casos'

  async function handleLogin(e){ 
    e.preventDefault();

    try{
      const response = await api.post('sessions', { id }) // sempre q utilizar 'await', utilizar o 'async'
      // Salvar no  Storage do navegador -> localStorage irá mostrar em toda a aplicação 
      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);
      console.log(response.data.name);

      history.push('/profile');
    }catch(err){
      alert('Falha no login, tente novamente.')
    }
  }

  return(
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero"/>

        <form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>

          <input
           placeholder="Sua ID"
           value={id}
           onChange={e => setId(e.target.value)}
           />
          <button className="button" type="submit">Entrar</button>

          <Link className="back-link" to="/register">
            Não tenho cadastro
          </Link>

        </form>
      </section>

      <img src={heroesImg} alt="Heroes"/>
    </div>
  );
}
