import React,{useState} from 'react'


export default function TextForm(props) {

  const [text, setText] = useState('');

  //Uppercase
  const handleUpClick = () =>{
    // console.log("Uppercase was clicked: " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase","success");
  }
  //LowerCase
  const handleLowClick = () =>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase","success");
  }
  //Clear Case
  const handleClearClick = () =>{
    let newText = '';
    setText(newText);
    props.showAlert("Text has been Cleared","success");
  }
  //Capitalized Case
  const handleCapitalizedClick = () =>{
    let newText = text.split('').map(w => w[0].toUpperCase() + w.substring(1).toLowerCase()).join(' ');
    setText(newText);
    props.showAlert("Converted to Capitalized Case","success");
  }
  // Alternate Case
  const handleAlternatingCase = () => {
      let newtext = ""
      for (let index = 0; index < text.length; index++) {
          if ((index % 2) === 0) {
              newtext += text[index].toLowerCase()
          }else {
              newtext += text[index].toUpperCase()
          }
      }
      setText(newtext)
      props.showAlert("Converted to Alternate Case","success");
  }
  // Download Text as Text File
  const handleDownloadCase=(filename, text)=>{
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none'; 
    document.body.appendChild(element);
    element.click(); 
    document.body.removeChild(element);
    props.showAlert("Text File has been Downloaded and Saved ","success");
  }

  //Copy Text Function 
  const handleCopyClick = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text has been Copied now!","success");
  }
  //Paste Text Function 
  const handlePasteClick = () => {
    navigator.clipboard.readText().then((clipboardText) => {
      setText(`${text}${clipboardText}`); //add the pasted text to text and display
      props.showAlert("The text has been Pasted ","success");
    });// rather than clearing the text and set it to the text in the clipboard
  }
  
  //Reverse Text 
  const handleReverseClick = () =>{
    let newText =text.split("").reverse().join("");;
    setText(newText)
    props.showAlert("This is the Reversed Text ","success");
  }

  //Inverse Text
  const handleInverseClick = () => {
    let newText=" ";
    for(let i=0;i<text.length;i++){
      var n=text.charAt(i);
      if (/[a-z]/.test(n)){
        n=n.toUpperCase();
        console.log(" true");
      }else{
        n=n.toLowerCase();
      }
      newText +=n 
    }
    setText(newText);
    props.showAlert("The Text is Inverted ","success");
  }
  //Remove Extra Spaces
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces has been Removed","success");
  }
  //Email (Example : Gmail, rediffmail, yahoo, hotmail)
  const handleEmailClick = () => {
    let newText=text.split("@");
    let later = newText[1].split(".");
    setText("Your account is on "+ later[0] + " And your username could be " + newText[0]);
    props.showAlert("The Type of Your Account and Email username are here","success");
  }
  //Repeat Text
  const handleRepeatClick = () => {      
    let newText = text.repeat(2);
    setText(newText);
    props.showAlert("The Text is Repeated","success");
  }

  //Change of Text
  const handleOnChange = (event) =>{
    // console.log("On Change");
    setText(event.target.value);
  }

  //Word Count Bug Solution
  const wordCount = (text) => {
    let regex = /\s+\S+/; //Go down You will find about it 
    let numOfWords=text.split(regex);
    return numOfWords.length;
  }

  //text = "new text"; // wrong way to change the state 
  //setText("new text"); // Correct way to change the state

  // let textStyle = {
  //   color: 'white',
  //   backgroundColor: 'black',
  // }

  //

  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'#043f71'}}> 
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} 
            style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#043f71'}} id="myBox" rows="8">
          </textarea>
        </div>  
        <button className="btn btn-secondary mx-1 my-3 center" onClick={handleUpClick}>UpperCase</button>
        <button className="btn btn-secondary mx-2 my-3" onClick={handleLowClick}>LowerCase</button>
        <button className="btn btn-secondary mx-2 my-3" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-secondary mx-2 my-3" onClick={handleAlternatingCase}>Alternate Text</button>
        <button className="btn btn-secondary mx-2 my-3" onClick={handleDownloadCase}>Download Text</button>
        <button className="btn btn-secondary mx-2 my-3" onClick={handleCapitalizedClick}>Capitalized case</button>
        <button className="btn btn-secondary mx-2 my-3" onClick={handleCopyClick}>Copy Text</button>
        <button className="btn btn-secondary mx-2 my-3" onClick={handleInverseClick}>Inverse Text</button>
        <button className="btn btn-secondary mx-2 my-3" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button className="btn btn-secondary mx-2 my-3" onClick={handlePasteClick}>Paste Text</button>
        <button className="btn btn-secondary mx-2 my-3" onClick={handleReverseClick}>Reverse Text</button>
        <button className="btn btn-secondary mx-2 my-3" onClick={handleEmailClick}>Email case</button>
        <button className="btn btn-secondary mx-2 my-3" onClick={handleRepeatClick}>Repeat case</button>

    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#043f71'}}>
      <h2>Your Text Summary  </h2>
      <p>{text==="" ? 0 : wordCount(text)} words and {text.length} characters</p>
      <p>{text==="" ? 0 * 0.008 : wordCount(text)*0.008} Minutes taken to read</p>
      <h2>Preview </h2>
      <p>{text.length>0 ? text : ""}</p>
    </div>
    </>
  )
}



/*

The regular expression /\s+\S+/g can be broken down as follows:

/\s+:   This part matches one or more whitespace characters (\s), such as spaces, tabs, or line breaks. The +   quantifieensures that it matches one or more occurrences of whitespace characters.

\S+:   This part matches one or more non-whitespace characters (\S). The + quantifier ensures that it matches one omore consecutive non-whitespace characters.

Together, \s+\S+ matches sequences of one or more whitespace characters followed by one or more non-whitespace    characters, effectively identifying words in the text.

/: Delimiters that indicate the start and end of the regular expression.

g: This is a flag indicating a global search. When present, it means that the regular expression should be appliedglobally, finding all matches rather than stopping after the first match.

In summary, the regular expression /s+\S+/g is used to find all occurrences of words (sequences of non-whitespaccharacters) in a text, including words separated by spaces, tabs, or line breaks.

   */