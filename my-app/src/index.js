 import React, { Children } from 'react';
import ReactDOM from 'react-dom';
 
const jsxLm1 = <span>Hello</span>;
const elem = React.createElement('span', { children: 'world!' });
const jsxLm2 = <span>World</span>;





const jsxLm = (
  <div>
    {jsxLm1},
    {jsxLm2}
  </div>
)

console.log(jsxLm)

ReactDOM.render(jsxLm,document.querySelector('#root'))
ReactDOM.render(elem, document.querySelector('#root'))
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
