import React, {useState, useEffect} from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';

import api from '../../services/api';

import logoImg from '../../assets/logo.png'

import styles from './styles';

export default function Incidents(){
    const [incidents, setIncidents] = useState([]);

    const [total, setTotal] = useState(0);

    const [page, setPage] = useState(1); //iniciando da primeira página. Não exite pág zero hehe

    const [loading, setLoading] = useState(false); /*estado de Loading p/ armazenar uma informação de quando está buscando dados novos. 
                                                    Evitar q sejam buscados novamente. Buscar uma pág por vez*/
    const navigation = useNavigation();

    function navigationToDetail(incident){
        navigation.navigate('Detail', { incident });
    }

    async function loadIncidents(){
        if(loading){
            return;
        }

        if(total > 0 && incidents.length == total){
            return;
        }

        setLoading(true);


        const response = await api.get('incidents', {
            params: {page } //número da pág
        });

        setIncidents([... incidents, ... response.data]); //anexar dois vetores dentro do React
        setTotal(response.headers['x-total-count']);
        setPage(page + 1); //pular p/ próx página
        setLoading(false); //no final da requisição
    }

    useEffect(() => {
        loadIncidents();
    }, []);

    return(
    <View style={styles.container}>
        <View style={ styles.header}>
        <Image source={logoImg}/>
        <Text style={styles.headerText}>
            Total de <Text style={styles.headerTextBold}>{total} casos.</Text>
        </Text>
    </View>
    
    <Text style={styles.title}>Bem-vindo!</Text>
    <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>

    <FlatList
        data={incidents}
        style={styles.incidentList}
        keyExtractor={incident => String(incident.id)}
        showsVerticalScrollIndicator={false} // tirar a visualização do scroll

        onEndReached={loadIncidents}// função q é disparada automática quando o usuário chegar no final da lista
        onEndReachedThreshold={0.2}// propriedade fala quantos % do final da lista o usuário precisa estar p/ q carregue novos itens
        renderItem={({ item: incident }) => ( //Render item-> Pegar cada dado de cada um dos incidents. A função 'render item' recebe vários parâmetros
        <View style={styles.incident}>
         <Text style={[styles.incidentProperty, { marginTop: 0}]}>ONG:</Text>
         <Text style={styles.incidentValue}>{incident.name}</Text>

         <Text style={styles.incidentProperty}>CASO:</Text>
         <Text style={styles.incidentValue}>{Incident.title}</Text>

         <Text style={styles.incidentProperty}>VALOR:</Text>
         <Text style={styles.incidentValue}>
             { Intl.NumberFormat('pt-BR', {
                 style: 'currency',
                 currency: 'BR'
             }.format(incident.value))
             }</Text>

         <TouchableOpacity
            style={styles.detailsButton}
            onPress={() => navigationToDetail(incident)}// sempre q passar um valor p/ uma função colocar uma 'arrow function' {() => navigationToDetail(incident)} dentro
        >
          <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
          <Feather name="arrow-right" size={16} color="E02041"/>
        </TouchableOpacity>
        </View>
      )}
     />  
    </View>  
);
}