import React from 'react';
import { useHistory } from 'react-router-dom';
import './main-styles.css';
const Main: React.FC = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/users');
  };
  return (
    <div className="main">
      <h1>
        Desafio Maratona <span>FullCycle</span>
      </h1>
      <p>Eduardo Wronscki Ricardo</p>
      <button className="nav-btn" onClick={handleClick}>
        Listar Usuários
      </button>
    </div>
  );
};

export default Main;
