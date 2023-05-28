import React, {useState} from 'react'

export default function TextForm(props) {
    
    const handleUpClick = ()=> {
        // console.log("Upper was clicked: " + text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLoClick = ()=> {
        // console.log("Upper was clicked: " + text);
        let newText = text.toLowerCase();
        setText(newText)
    }
    
    const handleClearClick = ()=> {
        let newText = ('');
        setText(newText)
    }

    const replaceString=()=>{
        let repval=prompt("Enter the word to be replaced:")
        let todoreplaced= new RegExp(repval,'g');
  
        let tobereplace=prompt("Enter the text that you want to replace with:");
        
        let newText= text.replace(todoreplaced,tobereplace);
        setText(newText);
      }

      const handleCopy = ()=> {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
      }
    const handleOnChange = (event)=> {
        // console.log("On change");
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    // text = "new text";// Wrong way to change the state
    // setText = ("new text");// Correct way to change the state
    return (
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1 my-1"onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1 my-1"onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1 my-1"onClick={handleClearClick}>Clear</button>
            <button className="btn btn-primary mx-1 my-1"onClick={replaceString}>Replace</button>
            <button className="btn btn-primary mx-1 my-1"onClick={handleCopy}>Copy Text</button>
        </div>
        <div className="container my-3">
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes Read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
  )
}
