import React, { useContext, useState, useEffect} from 'react';
import { Alert, TouchableOpacity, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { format, isBefore } from 'date-fns'; 
import firebase from '../../services/fireBaseConnection';
import { AuthContext } from '../../contexts/auth';
import Header from '../../components/Header';
import HistoricoList from  '../../components/HistoricoList';
import { Background, Container, Name, Saldo, Title, List, Area, ButtonFlotter} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DatePicker from '../../components/DatePicker';



export default function Home(){
  const [historico, setHistorico] = useState([])
  const [saldo, setSaldo] = useState(0);
  const [newDate, setNewDate] = useState(new Date());
  const [show, setShow] = useState(false);
  
  const navigation = useNavigation();
  
  const { user, signOut } = useContext(AuthContext);
  const uid = user && user.uid;

  
  useEffect( ()=>{

    async function loadList(){
      await firebase.database().ref('users').child(uid).on('value', (snapshot)=>{
        setSaldo(snapshot.val().saldo);
      });
      
      await firebase.database().ref('historico')
        .child(uid)
        .orderByChild('date').equalTo(format(newDate, 'dd/MM/yyyy'))
        .limitToLast(10).on('value', (snapshot)=>{
          setHistorico([]);

          snapshot.forEach((childItem)=>{
            let list = {
              key: childItem.key,
              tipo: childItem.val().tipo,
              valor: childItem.val().valor,
              desc: childItem.val().desc,
              date: childItem.val().date,
            };
            setHistorico(oldArray => [...oldArray, list].reverse()); 
          })
        })
    }



    loadList();

  }, [newDate])
  
  function handleDelete(data){

    //Pegando data do item:
    const [diaItem, mesItem, anoItem] = data.date.split('/');
    const dateItem = new Date(`${anoItem}/${mesItem}/${diaItem}`);
    console.log(dateItem);

    //Pegando data hoje:
    const formatDiaHoje = format(new Date(), 'dd/MM/yyyy');
    const [diaHoje, mesHoje, anoHoje] = formatDiaHoje.split('/');
    const dateHoje = new Date(`${anoHoje}/${mesHoje}/${diaHoje}`);
    console.log(dateHoje);

    if( isBefore(dateItem, dateHoje)){
      //Se a data do registro já passou, vai entrar aqui!!
      alert('Você não pode excluir um registro antigo!!');
      return;
    }
    Alert.alert(
      'Cuidado Atenção!',
      `Você deseja excluir ${data.tipo} - Valor: ${data.valor}`,
      [
        {
          text: 'Cancelar',
          style: 'cancel'
        },
        {
          text: 'Continuar',
          onPress: () => handleDeleteSuccess(data)
        }
      ]
    )
  }

  async function handleDeleteSuccess(data){
    await firebase.database().ref('historico')
      .child(uid).child(data.key).remove()
        .then( async ()=>{
          let saldoAtual = saldo;
          data.tipo === 'despesa' ? saldoAtual += parseFloat(data.valor) : saldoAtual -= parseFloat(data.valor)
        
          await firebase.database().ref('users').child(uid)
            .child('saldo').set(saldoAtual);
        })
        .catch( (error) => {
          console.log(error);
        })
  }

  function handleShowPicker(){
    setShow(true);
  }

  function handleClose(){
    setShow(false);
  }

  const onChange = (date) => {
    setShow(Platform.OS === 'ios');
    setNewDate(date);
    console.log(date);

  }
  const handleButtom = () => {
    alert('OK!');
  }

  return (

    <Background>
      <Header />
      <Container>
        <Name>{user && user.name}</Name>
        <Saldo>R$ {saldo.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') }</Saldo>
      </Container>

      <Area>
        <Title>Ultimas Movimentações</Title>
        <TouchableOpacity onPress={handleShowPicker}>
          <Icon name="filter-list" color="#FFF" size={30}/>
        </TouchableOpacity>
      </Area>

      <List 
        showsVerticalScrollIndicator={false}
        data={historico}
        keyExtractor={ (item) => item.key }
        renderItem={ ({ item }) => ( <HistoricoList data={item} deleteItem={handleDelete} /> ) }
    
      />

     
        <ButtonFlotter 
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}
          activeOpacity={0.7}
          onPress={ () => navigation.navigate('Registrar') }
        >
          <Icon name="add" color="#FFF" size={30}/>
        </ButtonFlotter>
    

      {show && (
        <DatePicker
          onClose={handleClose}
          date={newDate}
          onChange={onChange}
        />
      )}

    </Background>

  );
}