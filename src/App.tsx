import React from 'react';
import './App.css';
import Wuerfel from "./Wuerfel";

export const App: React.FC = () =>
    <>
        <div className={"App-header"}>Würfelschlange</div>
        <div className="App flex-container">
            <Wuerfel/>
        </div>
    </>;

export default App;
