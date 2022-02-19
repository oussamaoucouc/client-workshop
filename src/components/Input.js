import React from 'react'


const Input = ({ type, name, id, label }) => {

    return (
        <div className="input-wrapper">
            <label>{label}</label><br />
            <input id={id} name={name} type={type} className="input" />
        </div>
    );
}

export default Input;


