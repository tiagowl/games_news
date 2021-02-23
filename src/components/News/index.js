import React from 'react';
import './style.scss';
import api from '../../services/api';
import { TiMessage, TiTime } from "react-icons/ti";
import { Link } from 'react-router-dom';

// import { Container } from './styles';

function News() {

    const [games, setGames] = React.useState([]);

    React.useEffect(()=>{

        async function fetch(){
        
            const response = await api.get('/publicacoes?limit=2&page=1');
            setGames(response.data);
         }

         fetch();

    }, []);

    let iconStyles = { fontSize: "1.0rem", marginRight: "8px" }

  return(
      <section className="notice" >
          {games.map((game, index)=> (
              <div className="notice-list" key={game.id} >
                <img src={game.imageUrl} alt="game-image"/>
                    <div className="notice-text" >
                        <h1 className="text-title" ><Link to={`/notice?index=${index}`} >{game.title}</Link></h1>
                        <p className="text-description" >{game.description}</p>
                        <ul>
                            <li>por <span className="information" >João Vitor Arouca</span></li>
                            <li><TiTime style={iconStyles}/><span className="information" >5 minutos atrás</span></li>
                            <li><TiMessage style={iconStyles} /><span className="information" >0 comentários</span></li>
                        </ul>
                    </div>
              </div>
          ))}
          
      </section>
  );
}

export default News;