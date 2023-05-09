import React from 'react';
import './styles.css';
import ReactDOM from 'react-dom/client';
import { CounterApp } from './CounterApp';
import { FirstApp } from './FirstApp';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>        
        <CounterApp  value={100} />
        {/* <FirstApp  title="Este es un titulo" /> */}
    </React.StrictMode>
);