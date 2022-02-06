//  import React, { Children } from 'react';
import ReactDOM from 'react-dom';
import paintings from './painting.json'


const data = {
  "id": "id-1",
    "url": "https://cdn.pixabay.com/photo/2017/07/31/22/05/feathers-2561511_1280.jpg",
    "title": "Feathers. Art abstract",
    "price": 500,
    "author": {
      "tag": "ractapopulous",
      "url": "https://pixabay.com/users/ractapopulous-24766/"
    },
    "quantity": 10
}

const cardComponent = (
  <div className='box'>
    <img src={data.url} alt={data.title} width="400" height=""/>
    <h2>{data.title}</h2>
    <p>
      Autor: <a href="{data.author.url}">{data.author.tag}</a>
    </p>
    <p>Price: {data.price} credits</p>
    <button type='button'>Buy</button>
  </div>
)

console.log(cardComponent)

ReactDOM.render(cardComponent,document.querySelector('#root'))

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
