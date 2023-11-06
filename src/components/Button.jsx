import React from 'react'
import './Button.css'

export default function Button(props) {

    return (
        <>
            <div class="d-grid gap-2 col-6 mx-auto">
                <button class="btn btn-primary" type="button">{ props.name }</button>
            </div>
        </>
    )
}