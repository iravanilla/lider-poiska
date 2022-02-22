import React from 'react';
import { Header } from './components/Header';
import { Outlet } from 'react-router-dom';
import './index.scss';

export function App() {
  return (
    <div className="wrapper clear">
      <Header /> 

      <Outlet />
    </div>
  );
}

