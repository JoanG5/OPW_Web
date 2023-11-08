import React, { useState } from 'react'
import data from '../data/characters.json'
import './SearchBar.css'

function SearchBar( {div, setDiv} ) {
    const [submit, setSubmit] = useState('');
    const found = data.find(obj => obj.name === submit); 

    const handleChange = (e) => {
        setSubmit(e.target.value);
    }

    const handleDiv = () => {
        if (submit.trim () != '' && found) {
            setDiv(prevDiv => [submit, ...prevDiv,])
            setSubmit('')
            console.log(div)
        }
    }

    const handleEnterKey = (e) => {
        if (e.key === 'Enter') {
            handleDiv();    
        }
    }

    return (
    <div  id='searchbar' style={{ display: 'flex', justifyContent: 'center' }}>
        <input type="text" 
        value={submit}
        onChange={handleChange}
        onKeyUp={handleEnterKey}
        />
        <button onClick={handleDiv}>
            Enter
        </button>
    </div>
    )
}

export default SearchBar