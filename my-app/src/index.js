 import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
//===Рендерим главный компонент в полученный <div> #root из обычного файла html===//
// ReactDOM.render(<App />, document.querySelector('#root'))

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

