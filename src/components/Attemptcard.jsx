import React from 'react'
import './AttemptCard.css'

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