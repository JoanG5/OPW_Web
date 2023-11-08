import React, { useState } from "react"
import "./Classic.css"

import data from "../data/characters.json"

import AttemptCard from "../components/attemptcard";
import SearchBar from "../components/SearchBar";

export default function Classic() {

    const [div, setDiv] = useState([]);
    return (
        <div id="classic">
            <div  style={{ display: 'flex', justifyContent: 'center'}}>
                <h2>Guess today's One Piece character</h2>
            </div>
            <SearchBar div={div} setDiv={setDiv}/>
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
                // submit = {div[div.length - 1]}
                />
                ))}
            </div>
        </div>
    )
}