import React, { useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
// import { FiArrowLeft } from 'react-icons/fi';    <FiArrowLeft size={16} color="#E02041" />

import api from '../../services/api'
import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Register(){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [WhatsApp, setWhatsApp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  const history = useHistory();

  async function handleRegister(e){
    e.preventDefault(); //previnir ocomportamento padrão do  formulaŕio

    console.log({
      name,
      email,
      WhatsApp,
      city,
      uf
    })

    const data = {
      name,
      email,
      WhatsApp,
      city,
      uf
    };

    try{
      const response = await api.post('ongs', data) //aguardar a resposta
      
       alert(`Seu ID de acesso: ${ response.data.id}`);
       
       history.push('/');
    } catch(err){
      alert('Erro no cadastro, tente novamente.')
    }
}

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero"/>
          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

          <Link className="back-link" to="/">
       
          Não Tenho cadastro
          </Link>
        </section>
        <form onSubmit={handleRegister}>
          <input 
          placeholder="Nome da ONG"
          value={name}
          onChange={ e => setName(e.target.value)}
          />

          <input 
          type="email" 
          placeholder="E-mail"
          value={email}
          onChange={ e => setEmail(e.target.value)}
          />

          <input 
          placeholder="WhatsApp"
          value={WhatsApp}
          onChange={ e => setWhatsApp(e.target.value)}
          />

          <div className="input-group">
            <input 
            placeholder="Cidade"
            value={city}
            onChange={ e => setCity(e.target.value)}

            />
            <input 
            placeholder="UF" 
            style={{ width: 80 }}
            value={uf}
            onChange={ e => setUf(e.target.value)}
            />
          </div>

          <button className="button" type="submit">Cadastrar</button>

        </form>
      </div>
      </div>
    );
}