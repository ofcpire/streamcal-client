import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const nav = useNavigate();
  const goToListHandler = () => {
    nav('');
  };

  return (
    <header>
      <h1>
        <button onClick={goToListHandler}>STREAMCAL</button>
      </h1>
    </header>
  );
}
