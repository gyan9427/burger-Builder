import React from 'react';
import classes from './Input.css';

const Input = (props) => {
    let inputElement = null;

    switch(props.inputtype){
        case ('input'):
            inputElement = <input className={classes.inputElement} {...props}/>
            break;
        case ('textarea'):
            inputElement = <textarea className={classes.inputElement} {...props}/>
        default:
            inputElement = <input className={classes.inputElement} {...props}/>
            break;
    }
    return(
        <div className={classes.Input}>
            <label className={classes.Label}>{props.name}</label>
            {inputElement}
        </div>
    )
}

export default Input;