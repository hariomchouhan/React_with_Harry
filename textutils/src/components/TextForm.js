import React, { useState } from "react";

export default function TextForm(props) {

  // To UpperCase the text
  const handleUpClick = () => {
    // console.log("Upper was clicked: " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success")
  };

  // To LowerCase the text
  const handleLoClick = () => {
    // console.log("Upper was clicked: " + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success")
  };

  // To Clear the text
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("All text is clear!", "success")
  };

  // To Replace the text to another text
  const replaceString = () => {
    let repval = prompt("Enter the word to be replaced:");
    let todoreplaced = new RegExp(repval, "g");

    let tobereplace = prompt("Enter the text that you want to replace with:");

    let newText = text.replace(todoreplaced, tobereplace);
    setText(newText);
    props.showAlert("Replace text!", "success")
  };

  // To Copy the clipboard text
  const handleCopy = () => {
    // let text = document.getElementById("myBox");
    // text.select();
    navigator.clipboard.writeText(text);
    // document.getSelection().removeAllRanges();
    props.showAlert("Copy clipboard", "success")
  };

//   To Remove Extra spaces
const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Remove Extra Spaces", "success")
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
        <h1 className="mb-4">{props.heading}</h1>
        <div className="mb-3">
          {/* TextArea */}
          <textarea
            className={`form-control text-${props.mode==="light" ? "dark" : "light"}`}
            style={{backgroundColor: props.mode==="dark" ? "#13466e" : "white"}}
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>

        {/* All Buttons */}
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleClearClick}
        >
          Clear
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={replaceString}>
          Replace
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div className={`container my-3 text-${props.mode==="light" ? "dark" : "light"}`}>
        {/* Summary */}
        <h2>Your text summary</h2>

        {/* Text Calculation */}
        {/* <p>
          {text.split(" ").length} words and {text.length} characters
        </p> */}
        {/* <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g, '').length} characters</p> */}
        <p>
          {text.split(/\S+/).filter((element) => {return element.length!==0}).length} words and {text.length} characters
        </p>

        <p>{0.008 * text.split(" ").filter((element) => {return element.length!==0}).length} Minutes Read</p>

        {/* Text Preview */}
        <h2>Preview</h2>
        <p>{text.length>0 ? text : "Nothing to preview"}</p>
      </div>
    </>
  );
}
