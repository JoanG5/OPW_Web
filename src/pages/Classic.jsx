import React, { useState } from "react"
import "./Classic.css"

import AttemptCard from "../components/attemptcard";

export default function Classic() {

    const [submit, setSubmit] = useState('');
    const [div, setDiv] = useState([]);
    
    const handleChange = (e) => {
        setSubmit(e.target.value);
    }

    const handleDiv = () => {
        console.log(submit)
        if (submit.trim () != '') {
            div.push(submit)
            setDiv(div)
            setSubmit('')
        } 
        console.log(div)
    }

    const handleEnterKey = (e) => {
        if (e.key === 'Enter') {
            handleDiv();
        }
    }

    return (
        <div id="classic">
            <div  style={{ display: 'flex', justifyContent: 'center'}}>
                <h2>Guess today's One Piece character</h2>
            </div>
            <div  style={{ display: 'flex', justifyContent: 'center' }}>
                <input type="text" 
                value={submit}
                onChange={handleChange}
                onKeyUp={handleEnterKey}
                />
                <button onClick={handleDiv}>
                    Enter
                </button>
            </div>
            <div id="container">
                <div className="item">
                    Character
                </div> 
                <div className="item">
                    Devil Fruit
                </div>
                <div className="item">
                    Debut
                </div>
                <div className="item">
                    Status
                </div>
                <div className="item">
                    Bounty
                </div>
                <div className="item">
                    Origin
                </div>
            </div>
            <div>
            {div.map((text, index) => (
                <AttemptCard
                index = {index}
                character = {text}
                />
                ))}
            </div>
        </div>
    )
}