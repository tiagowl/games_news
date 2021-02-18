import React from 'react';
import './style.scss';
import valhalla from '../../assets/img/valhalla.jpg';
import pes2020 from '../../assets/img/pes2020.jpg';
import newdawn from '../../assets/img/newdawn.jpg';
import wildlands from '../../assets/img/wildlands.jpg';
import fracry5 from '../../assets/img/farcry5.jpg';
import breakpoint from '../../assets/img/breakpoint.jpg';

// import { Container } from './styles';

function Features() {
  return(
      <section className="primary" >
          
          
          <ul> 
              <li><img src={breakpoint} alt=""/></li>
              <li><img src={valhalla} alt=""/></li>
              <li><img src={pes2020} alt=""/></li>
              <li><img src={newdawn} alt=""/></li>
              <li><img src={wildlands} alt=""/></li>
              <li><img src={fracry5} alt=""/></li>
          </ul>
      </section>
  );
}

export default Features;