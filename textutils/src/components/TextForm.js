import React, { useState } from "react";

export default function TextForm(props) {
  // To UpperCase the text
  const handleUpClick = () => {
    // console.log("Upper was clicked: " + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  // To LowerCase the text
  const handleLoClick = () => {
    // console.log("Upper was clicked: " + text);
    let newText = text.toLowerCase();
    setText(newText);
  };

  // To Clear the text
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };

  // To Replace the text to another text
  const replaceString = () => {
    let repval = prompt("Enter the word to be replaced:");
    let todoreplaced = new RegExp(repval, "g");

    let tobereplace = prompt("Enter the text that you want to replace with:");

    let newText = text.replace(todoreplaced, tobereplace);
    setText(newText);
  };

  // To Copy the clipboard text
  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

//   To Remove Extra spaces
const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
}
  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  // text = "new text";// Wrong way to change the state
  // setText = ("new text");// Correct way to change the state
  return (
    <>
      <div className={`container text-${props.mode==="light" ? "dark" : "light"}`} >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          {/* TextArea */}
          <textarea
            className={`form-control text-${props.mode==="light" ? "dark" : "light"}`}
            style={{backgroundColor: props.mode==="dark" ? "gray" : "white"}}
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>

        {/* All Buttons */}
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleClearClick}
        >
          Clear
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={replaceString}>
          Replace
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div className={`container my-3 text-${props.mode==="light" ? "dark" : "light"}`}>
        {/* Summary */}
        <h2>Your text summary</h2>
        {/* Text Calculation */}
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        {/* Text Preview */}
        <h2>Preview</h2>
        <p>{text.length>0 ? text : "Enter something in the textbox above to preview it here"}</p>
      </div>
    </>
  );
}
