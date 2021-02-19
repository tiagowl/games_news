import React from 'react';
import './style.scss';

// import { Container } from './styles';

function Footer() {
  return(
      <footer>
          <ul>
              <li className="title" >SITE</li>
              <li>Especiais</li>
              <li>Análises</li>
              <li>Prévias</li>
              <li>Vídeos</li>
              <li>Colunas</li>
          </ul>

          <ul>
              <li className="title" >PLATAFORMAS</li>
              <li>Playstation 4</li>
              <li>Xbox One</li>
              <li>Switch</li>
              <li>PC</li>
              <li>Mobile</li>
          </ul>

          <ul>
              <li className="title" >NA REDE</li>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Youtube</li>
              <li>Feed RSS</li>
              <li>Assine</li>
          </ul>
      </footer>
  );
}

export default Footer;