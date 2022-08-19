import React, {useState} from 'react'

export default function TextForm(props) {
    // For Upper Case
    const handleUpClick = ()=>{
        let newText= text.toUpperCase();
        setText(newText)
        props.showAlert("counverted to UpperCase!", "success");
    }

    // For LowerCase
    const handleLoClick = ()=>{
        let newText= text.toLowerCase();
        setText(newText)
        props.showAlert("converted to lowercase!", "success");
    }

    // For Clear
    const handleClClick = ()=>{
       let newText = "";
       setText(newText)
       props.showAlert("Cleared", "success");
    }

    // For capital First Letter
    const handleCpClick = ()=>{
        let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
        setText(newText);
        props.showAlert("Captilize first letter", "success");
     }

     // For Removing Extra 
     const handleExtraSpaces = () =>{
        let newText = text.split(/[   ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces is removed", "success");
     }

    // For Copy Text
    const handleCopyClick=(event)=>{
        setText(event.target.value);
        let newtext=navigator.clipboard.writeText(text);
        console.log(newtext);
        // alert("text copied successfully");
        props.showAlert("Copied", "success");
      
};

    const handleOnChange = (event)=>{
        console.log("onClick");
        setText(event.target.value);
    }
    const [text, setText] = useState("");
   
    return (
        <>
            <div className="container" style={{color: props.mode==="dark"? "white": "#042743"}}>
                <h1>{props.heading} </h1>
                <textarea className="form-control my-2" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==="dark"? "grey": "white" , color: props.mode==="dark"? "white": "#042743"}} id="myBox" rows="10"></textarea>
                <button className='btn btn-primary mx-2' onClick={handleUpClick}>Capitle All Letters</button> 
                <button className='btn btn-primary mx-2' onClick={handleLoClick}>Lowercase All Letter</button>
                <button className='btn btn-primary mx-2' onClick={handleClClick}>Clear Text</button>
                <button className='btn btn-primary mx-2' onClick={handleCpClick}>Captial First Letter</button>
                <button className='btn btn-primary mx-2' onClick={handleCopyClick}>Copy</button>
                <button className='btn btn-primary mx-2' onClick={handleExtraSpaces}>Remove Extra Space</button>
                

            </div>

            <div className="container my-3" style={{color: props.mode==="dark"? "white": "#042743"}}>
                    <h1>Your Text Summary </h1>
                    <p>Total Characters {text.length} and Words {text.split(" ").length -1}</p>
                    <p>{0.008 * text.split(" ").length} Minutes Read</p>
                    <h2>Preview</h2>
                    <p>{text.length>0?text:"Your Enter Text"}</p>
            </div>
        </>
        
    )
}
