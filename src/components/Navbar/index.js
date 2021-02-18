import React from 'react';
import './style.scss';

// import { Container } from './styles';

function Navbar() {
  return(
      <header>
          <nav>
              <a href="#">Games Reviews</a>
              <ul>
                  <li>PS4</li>
                  <li>PS5</li>
                  <li>XBOX ONE</li>
                  <li>XBOX Series X</li>
              </ul>
          </nav>
      </header>
  );
}

export default Navbar;