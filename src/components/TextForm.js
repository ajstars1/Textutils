import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log('UpperCase was clicked')
        let newtext = text.toUpperCase();
        setResulttext(newtext);
    }
    const handleLoClick = ()=>{
        let newtext = text.toLowerCase();
        setResulttext(newtext);
    }
    const handleCapClick = ()=>{
        for (let i = 0; i < text.split(" ").length; i++) {   
            let lower = text.split(" ")[i].toLowerCase();
            var capResult= capResult +" "+lower.charAt(0).toUpperCase() + lower.slice(1);
        }
        setResulttext(capResult.slice(10) )
        
    }
    const handleResetClick =()=>{
        let newtext = text;
        setResulttext(newtext);
        props.showAlert("Text is Reset","success");
    }
    const handleOnChange = (event)=>{
        // console.log('On Change')
        setText(event.target.value);
    }
    const handleOnChangeNum = (event)=>{
        // console.log('On Change')
        setnumber(event.target.value);
    }
    const handleRepeatClick =()=>{
        let newtext = text.repeat(number);
        setResulttext(newtext);
    }
    const handleCopyClick =()=>{
        let newtext = document.getElementById("myBox2");
        newtext.select();
        navigator.clipboard.writeText(newtext.value)
        props.showAlert("Text is Copied","success");
    }
    const handleExtraSpaces =()=>{
        let newtext = text.split(/[ ]+/);
        setResulttext(newtext.join(" "));
    }
    const countWords=(str) =>{
        str = str.replace(/(^\s*)|(\s*$)/gi,"");
        return str.split(' ').length;
    }
    
    const [text, setText] = useState('')
    // text="new text" // Wrong way to set text
    // setText("new text") // Correct way to set text
    const [resulttext, setResulttext] = useState('')
    const [number, setnumber] = useState('')

    return (
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="7"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-1" onClick={handleCapClick}>All Words Capitalized</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove ExtraSpaces</button>
            <button onClick={handleResetClick}>Reset</button>
        </div>
        <div className="container my-3">
            <h3>Text Repeater</h3>
            <input placeholder="Enter the number" name="repeatervalue" type="number" value={number} onChange={handleOnChangeNum}  />
            <button className="btn btn-primary mx-1" onClick={handleRepeatClick}>Sumbit</button>
        </div>
        <div className="container my-3">
            <div className="mb-3">
            <textarea placeholder="Enter Text Above" className="form-control" id="myBox2" value={resulttext} onChange={handleOnChange} rows="7"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy</button>
            <div className="container my-3">
            <h3>Your Text Summary</h3>
            <p>{resulttext.length>0?countWords(resulttext):"0"} words , {resulttext.length} characters</p>
            <p>{parseInt(0.004 * resulttext.split(" ").length)} minutes {resulttext.length>0?0.24 * resulttext.split(" ").length:"0"} seconds read</p>
            </div>        
        </div>
        </>
    )
}
