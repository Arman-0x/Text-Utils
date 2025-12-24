import React , {useState} from 'react'
 
export default function Textform(props) {
    const handleupclick=()=>{
        console.log("clicked me" + text);
        let newtext=text.toUpperCase();
        setText(newtext);
       props.showalert("Text is converted to upper case","success ");
    }

    const handleupclick1=()=>{
        console.log("clicked me" + text);
        let newtext=text.toLowerCase();
        setText(newtext);
        props.showalert("Text is converted to lower case","success ");
    }

    const handlecopy=()=>{
      console.log("i am a copy" );
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showalert("Copied to clipboard","success ");
    }

    const handleclear=()=>{
      console.log("clear the text");
      let newtext="";
      //setText("")
       setText(newtext);
      props.showalert("Text area is cleared","success ")
    }
    const handleonchange=(event)=>{
        console.log("on change ");
        setText(event.target.value)
    }
    const handleextraspace=()=>{
      let newtext=text.split(/[ ]+/);
      setText(newtext.join(" "));
       props.showalert("extra spaces are removed","success ");

    }
    const [text , setText]=useState("enter the text");
    let wordCount;
if (text.trim()) {
  wordCount = text.trim().split(/\s+/).length;
} else {
  wordCount = 0;
}
  return (
    <>
    <div className ="container my-3"  style={{color: props.mode==='dark'?'white':'#042743' }}> 
    <h1 >{props.heading}</h1>
    <div className="mb-3">
<label htmlFor="myBox" className="form-label"></label>
<textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
</div>
<button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleupclick}>lower to upper case</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleupclick1}>upper case to lower case</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handlecopy}>Copy text</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleclear}>clear text</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleextraspace}>Clear extra space</button>


</div>

<div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743' }} >
  <h2>text summary</h2>
  <p>There are {wordCount} words and length of total characters is {text.length}</p>
  <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} word reads per minute</p>
  <h2>preview</h2>
  <p>{text.length>0?text:"Nothing to Preview"}</p>
</div>

    </>
  )
}
