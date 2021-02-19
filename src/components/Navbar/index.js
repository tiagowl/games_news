import React from 'react';
import './style.scss';
import { TiSocialInstagram, TiSocialFacebook, TiSocialTwitterCircular, TiSocialYoutube } from "react-icons/ti";

// import { Container } from './styles';

function Navbar() {

    let iconStyles = { color: "white", fontSize: "1.5rem", marginLeft: "13px" }
  return(
      <header>
          <nav>
              
              <ul>
                  <li>Notícias</li>
                  <li>Análises</li>
                  <li>Especiais</li>
                  <li>Colunas</li>
                  <li className="separador" >|</li>
                  <li>PS4</li>
                  <li>PS5</li>
                  <li>XBOX ONE</li>
                  <li>XBOX Series X</li>
                  <li className="separador" >|</li>
                  <li>Revista</li>
                  <li>Assine</li>
              </ul>
          </nav>
          <div id="second-nav" >
            <div id="logo" >
                <a href="#">Games News</a>
                
                <ul id="social" >
                    <li><TiSocialInstagram style={iconStyles} /></li>
                    <li><TiSocialFacebook style={iconStyles} /></li>
                    <li><TiSocialTwitterCircular style={iconStyles} /></li>
                    <li><TiSocialYoutube style={iconStyles} /></li>
                </ul>
            </div>
          </div>
      </header>
  );
}

export default Navbar;