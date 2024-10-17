import React from 'react';
import ReactDOM from 'react-dom';

const inputClick = () => console.log("Clicked")
const mouseOver = () => console.log("Mouse Over")

const helpText = "Help text"

const elements = (<div>
    <h1>{helpText}</h1>
    <input placeholder={helpText}
        onClick={inputClick} onMouseEnter={mouseOver}/>
    <p>{helpText === "Help text" ? "Yes" : "No"}</p>
</div>)

const app = document.getElementById("app")

ReactDOM.render(elements, app)