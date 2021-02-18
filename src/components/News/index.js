import React from 'react';
import './style.scss';
import api from '../../services/api';

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

  return(
      <section className="notice" >
          {games.map(game=> (
              <div className="notice-list" key={game.id} >
                <img src={game.imageUrl} alt="game-image"/>
                    <div className="notice-text" >
                        <h1 className="text-title" >{game.title}</h1>
                        <p className="text-description" >{game.description}</p>
                    </div>
              </div>
          ))}
          
      </section>
  );
}

export default News;