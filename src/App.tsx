import React, {useEffect, useState} from 'react';
import './App.css';
import {WuerfelInput} from "./WuerfelInput";
import {WuerfelView} from "./WuerfelView";

const INITIAL_NUMBE_OF_DICES = 40;

const getRandomEyes: () => number = () => Math.floor(Math.random() * 6 + 1);
const rollDice: (numberOfDice: number) => number[] = (numberOfDice) => {
    const dice: number[] = [];
    for (let i = 0; i < numberOfDice; i++) {
        dice.push(getRandomEyes());
    }
    return dice;
};


function App() {
    const [dice, setDice] = useState<number[]>([]);
    const [highlighted, setHighlighted] = useState<boolean[]>([]);
    const onNumberOfDicesEntered = (numberOfDices: number) => {
        calculateInitialDices(numberOfDices);
    };

    const calculateInitialDices = (numberOfDices: number) => {
        const newDices = rollDice(numberOfDices);
        setDice(newDices);
        setHighlighted(newDices.map(_ => false))
    };

    useEffect(() => {
        calculateInitialDices(INITIAL_NUMBE_OF_DICES);
    }, []);


    return (
        <div className="App">
            <WuerfelInput initialValue={INITIAL_NUMBE_OF_DICES} onNumberOfDicesEntered={onNumberOfDicesEntered}/>
            <WuerfelView dices={dice} highlighted={highlighted}/>
        </div>
    );
}

export default App;
