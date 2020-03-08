import React from 'react';
import './App.css';
import Wuerfel from "./Wuerfel";

export const App: React.FC = () =>
    <>
        <div className={"App-header"}>Würfelschlange</div>
        <div className="App flex-container">
            <div className={"description"}>Visualisierung des mathematischen Experiments <a
                href={"https://de.wikipedia.org/wiki/W%C3%BCrfelschlange"}>Würfelschlange</a> aus <a
                href={"http://minkorrekt.de/minkorrekt-folge-161-gesichtswurst/"}>Methodisch inkorrekt Folge
                161</a>
            </div>
            <Wuerfel/>
        </div>
    </>;

export default App;
