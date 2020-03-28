
   //Emmet e suas habilidades maravilhosas:
    // .div.logon-container -> ao digitar no topo da pagina -> aperte Tab
    // .section.form -> ao digitar no topo da pagina -> aperte Tab
    // import { FiLogIn } from 'react-icons/fa';  <FiLogIn size={16} color="#E02041"/>Não Tenho cadastro

import React from 'react';

import './styles.css';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';
import { Link } from 'react-router-dom';

export default function Logon(){
  return(
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero"/>

        <form>
          <h1>Faça seu logon</h1>

          <input placeholder="Sua ID"/>
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
