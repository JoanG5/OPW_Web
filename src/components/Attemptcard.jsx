import React from 'react'
import './AttemptCard.css'
import data from '../data/characters.json'

function AttemptCard(props) { 

    function findIndexByName(data, submit) {
        for (let i = 0; i < data.length; i++) {
          if (data[i].name === submit) {
            return i;
          }
        }
        return -1;
    }

    const index = findIndexByName(data, props.submit);
    let devilFruit

    if (data[index].eng_fruit.length > 0){
        devilFruit = data[index].eng_fruit
    } else{
        devilFruit = "None"
    }

    return (
        <div id='AttemptCard' key={props.index}>
            <div className="attempt">
                {data[index].name}
            </div>
            <div className="attempt">
                {devilFruit}
            </div>
            <div className="attempt">
                {data[index].debut}
            </div>
            <div className="attempt">
                {data[index].status}
            </div>
            <div className="attempt">
                {data[index].bounty}
            </div>
            <div className="attempt">
                {data[index].origin}
            </div>
        </div>
    )
}

export default AttemptCard