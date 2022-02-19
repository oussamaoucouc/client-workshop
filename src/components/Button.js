import React from 'react'
import './../styles/styles.button.css'



const Button = ({ text }) => {

    return (
        <div className="button-wrapper">
            <button className="btn"> { text } </button>
        </div>
    );
}


export default Button;