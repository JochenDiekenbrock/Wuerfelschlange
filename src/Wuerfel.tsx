import React, {useEffect, useState} from 'react';
import './App.css';
import {WuerfelInput} from "./WuerfelInput";
import WuerfelLine from "./WuerfelLine";

const INITIAL_NUMBER_OF_DICES = 40;

export interface DicesData {
    dices: number[];
    highlighted: boolean[];
    matched?: boolean;
}

const getRandomEyes: () => number = () => Math.floor(Math.random() * 6 + 1);
const rollDice: (numberOfDice: number) => number[] = (numberOfDice) => {
    const dice: number[] = [];
    for (let i = 0; i < numberOfDice; i++) {
        dice.push(getRandomEyes());
    }
    return dice;
};
const calculateHighlighted: (dices: number[]) => boolean[] = (dices) => {
    const result = ([] as boolean[]).fill(false, 0, dices.length);
    let pos = 0;
    while (pos < dices.length) {
        result[pos] = true;
        pos = pos + dices[pos];
    }

    return result;
};
const calculateMatch: (originalHighlights: boolean[], highlights: boolean[]) => boolean = (originalHighlights, highlights) => {
    const lastOriginalHighlight = originalHighlights.lastIndexOf(true);
    const lastHighlight = highlights.lastIndexOf(true);
    return lastOriginalHighlight === lastHighlight;
};

const calculateFurtherLine: (data: DicesData, startValue: number) => DicesData = (data, startValue)  => {
    const result: DicesData = {dices: [...data.dices], highlighted: [] as boolean[]};
    result.dices[0] = startValue;
    result.highlighted = calculateHighlighted(result.dices);
    result.matched = calculateMatch(data.highlighted, result.highlighted);

    return result;
};

export const Wuerfel: React.FC = () => {
    const [dicesData, setDicesData] = useState<DicesData>({dices: [], highlighted: [], matched: false});

    const onNumberOfDicesEntered = (numberOfDices: number) => {
        calculateInitialDices(numberOfDices);
    };

    const calculateInitialDices = (numberOfDices: number) => {
        const newDices = rollDice(numberOfDices);
        setDicesData({dices: newDices, highlighted: calculateHighlighted(newDices)});
    };

    useEffect(() => {
        calculateInitialDices(INITIAL_NUMBER_OF_DICES);
    }, []);

    return (
        <div className={"wuerfel-container"}>
            <WuerfelInput initialValue={INITIAL_NUMBER_OF_DICES} onNumberOfDicesEntered={onNumberOfDicesEntered}/>
            <WuerfelLine lineTitle={"Gewürfelt:"} dicesData={dicesData}/>
            {
                [1,2,3,4,5,6].map((eyes, index) => {
                    if (eyes !== dicesData.dices[0]) {
                        const data = calculateFurtherLine(dicesData, eyes);
                        return <WuerfelLine key={index} lineTitle={""} dicesData={data}/>
                    }

                    return null;
                })
            }
        </div>
    );
};

export default Wuerfel;
