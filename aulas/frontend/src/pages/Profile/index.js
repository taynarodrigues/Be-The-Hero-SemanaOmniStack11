import React, { useEffect, useState} from 'react';
import { Link, useHistory } from 'react-router-dom'; // import { FiPower, FiTrash2 } from 'react-icons/fi';  <FiPower size={18} color="#E02041" <FiTrash2 size={20} color="#a8a8b3/>

import api from '../../services/api';
import './styles.css';

import logoImg from '../../assets/logo.svg';
export default function Profile(){

    const [incidents, setIncidents] = useState([]);

    const history = useHistory();

    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');

    // useEffect: disparar uma função em algum momento determinado pelo componente
    useEffect(() => { 
        api.get('profile', {
            headers:{
                Authorization: ongId,
            }
        }).then( response => {
          setIncidents(response.data);
        })
    }, [ongId]);

    async function handleDeleteIncident(id){
      try{
        await api.delete(`incidents/${id}`, {
          headers:{
            Authorization: ongId,
          }
        });

        setIncidents(incidents.filter(incident => incident.id !== id));
      }catch(err){
        alert('Erro ao deletar caso, tente novamente.');
      }
    }

    function handleLogout(){
      localStorage.clear();  //limpar todo o localStorage
      history.push(); // enviar de volta para rota raiz, q é a rota de login
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be the Hero"/>
                <span>Bem vinda, {ongName}</span>

                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button onClick={handleLogout} type="button" color="#E02041">sair</button>
            </header>

            <h1>Casos Cadastrados</h1>
            <ul>
                {incidents.map(incidents => (
                <li key={ incidents.id}>
                  <strong>CASO:</strong>
                  <p>{incidents.title}</p>

                  <strong>DESCRIÇÃO</strong>
                  <p>{incidents.description}</p>
                  
                  <strong>VALOR:</strong> 
                  <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incidents.value)}</p>

                  <button onClick={() => handleDeleteIncident(incidents.id)} type="button" color="#a8a8b3">
                    excluir
                  </button>
              </li>
                ))}

            </ul>
        </div>
    );
}

// classe global 'INTL' q é respectiva a internacionalização
