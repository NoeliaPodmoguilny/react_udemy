import './styles.css';
import React from 'react';
import { ReactApp } from './ReactApp';
import { Firstapp } from './firstapp';
import ReactDOM from 'react-dom/client'; //por ser web, sino react-native..por ej...
import { CounterApp } from './CounterApp';
import { Usestate } from './Usestate';

//renderizamos

ReactDOM.createRoot( document.getElementById( 'root' )).render(
    <React.StrictMode>
        <ReactApp title='Hola, bienvenidos a mi pag web'/> 
        {/* <Firstapp saludo='Hola soy Noe' /> */}
        {/* <CounterApp value={10} /> */}
        {/* <Usestate valor='change bg color'/> */}
    </React.StrictMode>
);