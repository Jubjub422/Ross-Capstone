import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { GrindItOut } from './Components/GrindItOut'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <GrindItOut />
  </BrowserRouter>,
  document.getElementById('root')
);

