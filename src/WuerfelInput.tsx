import React, {SyntheticEvent, useState} from 'react';

const MAX_NUMBER_OF_DICES = 100;
interface WuerfelInputProps {
    initialValue: number
    onNumberOfDicesEntered: (numberOfDices: number) => void;
}

export const WuerfelInput: React.FC<WuerfelInputProps> = ({initialValue, onNumberOfDicesEntered}) => {
    const [numberOfDices, setNumberOfDices] = useState(initialValue);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = +e.target.value;
        if (newValue <= MAX_NUMBER_OF_DICES) {
            setNumberOfDices(newValue);
        }
        e.preventDefault()
    };

    const onEnter = (e: React.SyntheticEvent) => {
        onNumberOfDicesEntered(numberOfDices);
        e.preventDefault();
    };

    return <form onSubmit={onEnter}>
        <label>Wie viele Würfel möchtest Du? <input style={{marginRight: "1em"}} value={numberOfDices > 0 ? numberOfDices : ''} onChange={onChange}/></label>
        <button onClick={onEnter}>Würfeln</button>
    </form>
};
