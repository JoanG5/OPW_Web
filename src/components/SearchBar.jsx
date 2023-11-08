import React, { useState } from 'react'
import './SearchBar.css'

function SearchBar( {div, setDiv} ) {
    const [submit, setSubmit] = useState('');

    const handleChange = (e) => {
        setSubmit(e.target.value);
    }

    const handleDiv = () => {
        console.log(submit)
        if (submit.trim () != '') {
            setDiv(prevDiv => [submit, ...prevDiv,])
            setSubmit('')
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