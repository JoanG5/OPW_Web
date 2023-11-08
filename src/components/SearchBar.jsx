import React, { useState } from 'react'
import data from '../data/characters.json'
import './SearchBar.css'

function SearchBar( {div, setDiv} ) {
    const [submit, setSubmit] = useState('');
    const found = data.find(obj => obj.name.toLowerCase() === submit.toLowerCase()); 

    const handleChange = (e) => {
        setSubmit(e.target.value);
    }

    const handleDiv = () => {
        if (submit.trim() != '' && found && !div.includes(submit.charAt(0).toUpperCase() + submit.slice(1).toLowerCase())) {
            setDiv(prevDiv => [submit.charAt(0).toUpperCase() + submit.slice(1).toLowerCase(), ...prevDiv,])
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
    <div id='searchbar' style={{ display: 'flex', justifyContent: 'center' }}>
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