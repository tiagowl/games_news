import React from 'react';
import './style.scss';
import me from '../../assets/img/me.jpg';

function NoticeContent({game}) {

  React.useEffect(()=>{
    console.log(game);
  }, [game]);

  if(game)  return(
      <section id="notice" >
            <h1>{game.title}</h1>
            <hr/>
            <h2>{game.description}</h2>
            <img src={game.imageUrl} alt=""/>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            <hr/>
            <div id="autor-informations" >
                <img src={me} alt=""/>
                <div id="autor-description" >
                  <h1 id="autor-title" >Tiago</h1>
                  <p id="autor-text" >Tecnólogo em Gestão Ambiental, produtor do BlastCast e sincero até demais. Jogador casual de muitos e hardcore em poucos. Adora jogos multiplayer que causam discórdia e fogo no parquinho. @XelaoHerege</p>
            </div>
            </div>
      </section>
  )
  else return <p>Carregando...</p>
}

export default NoticeContent;