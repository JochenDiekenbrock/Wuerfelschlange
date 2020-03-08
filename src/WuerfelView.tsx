import React from 'react';
import {IconContext} from "react-icons";
import {
    GiPerspectiveDiceSixFacesRandom,
    GiThumbUp,
    GiThumbDown,
    GiDiceSixFacesOne,
    GiDiceSixFacesTwo,
    GiDiceSixFacesThree,
    GiDiceSixFacesFour,
    GiDiceSixFacesFive,
    GiDiceSixFacesSix
} from "react-icons/gi";
import {DicesData} from "./Wuerfel";

interface WuerfelViewProps {
    dicesData: DicesData;
}

const numberToStyledDice = (eyes: number, hightlighed: boolean) => {
    return <IconContext.Provider
        value={{
            size: "2em",
            style: {color: hightlighed ? "red" : "darkblue"}
        }}>{numberToDice(eyes)}</IconContext.Provider>
};

const numberToDice = (eyes: number) => {
    switch (eyes) {
        case 1:
            return <GiDiceSixFacesOne/>;
        case 2:
            return <GiDiceSixFacesTwo/>;
        case 3:
            return <GiDiceSixFacesThree/>;
        case 4:
            return <GiDiceSixFacesFour/>;
        case 5:
            return <GiDiceSixFacesFive/>;
        case 6:
            return <GiDiceSixFacesSix/>;
        default:
            return <GiPerspectiveDiceSixFacesRandom/>
    }
};


export const WuerfelView: React.FC<WuerfelViewProps> = ({dicesData}) => {
    return <div>
        {dicesData.dices.map((eyes, index) => {
            return <span key={index}>
            {index > 0 && index % 10 === 0 ? <span style={{marginLeft: "1em"}}/> : <></>}
                <span title={String(eyes)}>{numberToStyledDice(eyes, dicesData.highlighted[index])}</span></span>
        })}
        {dicesData.matched !== undefined &&
        <IconContext.Provider
            value={{
                size: "2em",
                style: {color: dicesData.matched ? "green" : "red"}
            }}><span style={{marginLeft: "1em"}}>
            {dicesData.matched ? <GiThumbUp/> : <GiThumbDown/>}
            </span>
        </IconContext.Provider>}
    </div>;
};
