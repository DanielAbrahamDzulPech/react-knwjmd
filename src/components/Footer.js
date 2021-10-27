import React, { Component } from 'react';
import '../css/Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="Footer__div">
        <h1>Soy el footer</h1>
        <ul>
          <li>Inicio</li>
          <li>Login</li>
          <li>Nosotros</li>
          <li>Ubicacion</li>
          <li>Ventas</li>
          <li>inicio</li>
        </ul>
      </div>
    );
  }
}

export default Footer;
