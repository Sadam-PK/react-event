import React from "react";

function TextForm(props) {
    return (
        <div class="container">
            <h1>{props.heading}</h1>
            <textarea class="form-control" placeholder="Leave a comment here"
                id="myBox"></textarea>
        </div>
    )
}

export default TextForm