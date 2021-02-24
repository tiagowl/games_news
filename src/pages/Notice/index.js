import React from 'react';
import './style.scss';
import Options from '../../components/Options';
import NoticeContent from '../../components/NoticeContent';
import api from '../../services/api';
import { useParams } from 'react-router-dom';

// import { Container } from './styles';

function Notice() {

  const [game, setGame] = React.useState([])
  const {index} = useParams();

  React.useEffect(()=>{
    
    async function fetch(){
        
      const response = await api.get('/publicacoes?limit=2&page=1');
      setGame(response.data);
   }

   fetch();

  }, []);

  return (
      <section>
         <Options/>
         <NoticeContent game={game[index]} />
      </section>
  );
}

export default Notice;