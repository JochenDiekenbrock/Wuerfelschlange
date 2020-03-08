import React from 'react';
import './App.css';
import {WuerfelView} from "./WuerfelView";
import {DicesData} from "./Wuerfel";

interface WuerfelLineProps {
    lineTitle: string;
    dicesData: DicesData;
}

export const WuerfelLine: React.FC<WuerfelLineProps> = ({lineTitle, dicesData}) => {
    return (
        <div className={"wuerfel-line"}>
            <span className={"line-heading"}>{lineTitle}</span>
            <WuerfelView dicesData={dicesData}/>
        </div>
    );
};

export default WuerfelLine;
