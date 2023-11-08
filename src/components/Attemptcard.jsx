import React from 'react'
import './AttemptCard.css'
import data from '../data/characters.json'

export default function AttemptCard(props) { 

    return (
        <div id='AttemptCard'>
            <div className="attempt" key={props.index}>
                {props.character}
            </div>
            <div className="attempt" key={props.index}>
                {props.character}
            </div>
            <div className="attempt" key={props.index}>
                {props.character}
            </div>
            <div className="attempt" key={props.index}>
                {props.character}
            </div>
            <div className="attempt" key={props.index}>
                {props.character}
            </div>
            <div className="attempt" key={props.index}>
                {props.character}
            </div>
        </div>
    )
}