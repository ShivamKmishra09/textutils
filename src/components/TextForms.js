import React,{useState} from 'react'

export default function TextForms(props) {
    const handleUpClick=()=>{
        // console.log("UpperCase was clicked"+text);
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!","success");
    }
    const handleLoClick=()=>{
        // console.log("UpperCase was clicked"+text);
        let newText= text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!","success");
    }
    const handleSpClick=()=>{
        let newText= text.replace(/\s+/g, ' ').trim();
        setText(newText);
        props.showAlert("Removed extra spaces!","success");
    }
    const handleOnChange=(event)=>{
        console.log("On Change");
        setText(event.target.value);
    }
    const[text,setText]=useState('');
    // text="new text"; Wrong way to change the state
    // setText("new text"); Correct way to change the state
    
    return (
        <>
        <div className="container" style={{color:props.mode===`dark`?`white`:`black`}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control"value={text} onChange={handleOnChange} style={{backgroundColor:props.mode===`dark`?`grey`:`white`,color:props.mode===`dark`?`white`:`black`}} id="myBox" rows="10"></textarea>
            </div>
            <button className="btn btn-primary mx-2 my-1"onClick={handleUpClick}>Convert to uppercase</button>
            <button className="btn btn-primary mx-2 my-1 "onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2 my-1 "onClick={handleSpClick}> Remove extra spaces</button>
        </div>
        <div className="container my-3"  style={{color:props.mode===`dark`?`white`:`black`}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 *  text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Enter something to preview it here"}</p>
        </div>
        </>
    )
}
