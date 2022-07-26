import React, { useState } from 'react'


export default function TextForm(props) {
    const upCase = () => {
        if (text) {
            let newText = text.toUpperCase();
            SetText(newText);
            props.showAlert("Text is converted to Upper Case!", "success");
        } else {
            alert("Please Enter Text...");
        }
    }

    const tlCase = () => {
        if (text) {
            let newText = text.split(" ");
            for (let i = 0; i < newText.length; i++) {
                let ch = newText[i].split("");
                ch[0] = ch[0].toUpperCase();
                let mdf = ch.join("");
                // console.log(mdf);
                newText[i] = mdf;
            }
            newText = newText.join(" ");
            SetText(newText);
            props.showAlert("Text is converted to Title Case!", "success");
        } else {
            alert("Please Enter Text...");
        }

    }

    const lowCase = () => {
        if (text) {
            let newText = text.toLowerCase();
            SetText(newText);
            props.showAlert("Text is converted to Lower Case!", "success");
        } else {
            alert("Please Enter Text...");
        }

    }

    const clearText = () => {
        let newText = "";
        SetText(newText);
        props.showAlert("Text is Clear!", "success");
    }

    const copyTex = () => {
        if (text) {
            navigator.clipboard.writeText(text);
            props.showAlert("Text copied to clipboard!", "success");
        } else {
            alert("Please Enter Text...");
        }

    }

    const removeSpace = () => {
        if (text) {
            let newText = text.split(/[ ]+/);
            SetText(newText.join(" "));
            props.showAlert("Extra space is removed fron the text!", "success");
        } else {
            alert("Please Enter Text...");
        }

    }

    const upChange = (event) => {
        // console.log("onChnage");
        SetText(event.target.value);
    }

    const [text, SetText] = useState("");
    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>{props.heading}</h2>
                <div className="form-group my-2">
                    {/* <label for="myBox">{props.box}</label> */}
                    <textarea className="form-control" value={text} onChange={upChange} id="myBox" rows="6" placeholder='Enter Text then just hit "Buttons."' style={{ backgroundColor: props.mode === 'dark' ? '#353535' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}></textarea>
                </div>
                <button className="btn btn-primary btn-sm mx-1 my-1" disabled={text.length === 0} onClick={upCase}>Upper Case</button>
                <button className="btn btn-primary btn-sm mx-1 my-1" disabled={text.length === 0} onClick={lowCase}>Lower Case</button>
                <button className="btn btn-primary btn-sm mx-1 my-1" disabled={text.length === 0} onClick={tlCase}>Title Case</button>
                <button className="btn btn-primary btn-sm mx-1 my-1" disabled={text.length === 0} onClick={copyTex}>Copy Text</button>
                <button className="btn btn-primary btn-sm mx-1 my-1" disabled={text.length === 0} onClick={removeSpace}>Remove Space</button>
                <button className="btn btn-danger btn-sm mx-1 my-1" disabled={text.length === 0} onClick={clearText}>Clear Text</button>
            </div>
            <div className='container my-3' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Text Summary</h2>
                <li>The above paragragh contains <b>{(text.length !== 0) ? text.split(" ").length : text.length} Word</b> & <b>{text.length} Characters</b></li>
                <li>Average time takes to read this paragragh is <b>{(0.009 * text.split(" ").length).toFixed(1)}</b> minute</li>

                <h2 className='mt-3'>Preview</h2>
                <p>{text.length > 0 ? text : "Enter the text to get preview here ..."}</p>
            </div>
        </>
    )
}
