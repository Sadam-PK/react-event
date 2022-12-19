import React, { useState } from "react";

function TextForm(props) {
    const [text, setText] = useState('Enter Text')
    const handleUpClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    return (
        <div className="container">
            {/* <h1>{props.heading}</h1> */}
            <textarea className="form-control" placeholder="Leave a comment here"
                id="myBox" value={text} onChange={handleOnChange}>
            </textarea>
            <button className="btn btn-primary" onClick={handleUpClick}>UpperCase</button>
        </div>
    )
}

export default TextForm