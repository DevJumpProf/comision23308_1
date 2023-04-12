import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from "./Card"
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
<Card apellido= "Messi" nacimiento= {1987} clubes= {["Newells ", "Barcelona"]} mundial= {true} late={false}/>
<Card apellido= "Ronaldo" nacimiento= {1987} clubes= {["Lisboa", "Manchester"]} mundial= {false} late={true}/>
</>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
