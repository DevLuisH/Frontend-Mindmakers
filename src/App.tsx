import React from 'react';
import './index.css';
import Header from './componentes/header/Header';
import MainContent from './componentes/Main/MainCountent.tsx';
import Footer from './componentes/footer/Footer';

const App: React.FC = () => (
  <div className="App">
    <Header />
    <MainContent />
    <Footer />
  </div>
);

export default App;
