import React from 'react';
import './header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-container">
        <img src="/src/Img/Salesforce-Logo.png" alt="Logotipo" className="logo" />
        <div className="nav-center-right">
          <nav>
            <ul className="opcoes-nav">
              <li><a href="/produtos">Produtos</a></li>
              <li><a href="/categorias">Categorias</a></li>
              <li><a href="/suporte">Suporte</a></li>
              <li><a href="/Integrantes">Integrantes</a></li>
            </ul>
          </nav>
          <a href="/cadastre-se" className="cadastre-se">Cadastre-se</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
