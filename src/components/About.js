import React, { useState } from 'react'

export default function About() {

    const[myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white',
    })
    const [btnText, setBtnText] = useState ("Enable Dark Mode") 

    const toggleStyle = () => {
        if(myStyle.color === 'black'){
            setMyStyle({
                color: 'white',
                backgroundColor: 'black',
                border: '1px solid white',
            })
            setBtnText("Enable Light Mode") 
        }
        else {
            setMyStyle({
                color: 'black',
                backgroundColor: 'white',
            })
            setBtnText("Enable Dark Mode") 
        }
    }

    return (
    <>
    <div className='container' style={myStyle}>
            <h1 className='my-3'>About Us</h1>  
                <div className="accordion" id="accordionExample"  style={myStyle}>
            <div className="accordion-item">
            <h2 className="accordion-header">
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"    aria-expanded="true" aria-controls="collapseOne">
                <strong>Analyze Your text</strong>
                </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                Text analysis (TA) is a machine learning technique used to automatically extract valuable insights from unstructured text data. Companies use text analysis tools to quickly digest online data and documents, and transform them into actionable insights.Text analysis tools allow businesses to structure vast quantities of information, like emails, chats, social media, support tickets, documents, and so on, in seconds rather than days, so you can redirect extra resources to more important business tasks.
                </div>
            </div>
            </div>
            <div className="accordion-item">
            <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Free to Use</strong>
                </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                TTSMaker is a free text-to-speech tool that provides speech synthesis services and supports multiple languages, including English, French, German, Spanish, Arabic, Chinese, Japanese, Korean, Vietnamese, etc., as well as various voice styles. You can use it to read text and e-books aloud, or download the audio files for commercial use (it's completely free). As an excellent free TTS tool, TTSMaker can easily convert text to speech online.
                </div>
            </div>
            </div>
            <div className="accordion-item">
            <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Browser Compatible</strong>
                </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                Browser Compatibility refers to the ability of a certain website or app to appear fully functional on different browsers that are available in the market. This means that your website's HTML coding, as well as the scripts on that website, should be compatible to run on all browsers your users might use
                </div>
            </div>
            </div>
            </div>
            <div className="container">
            <button onClick={toggleStyle} type="button" className="btn btn-secondary my-3 center">{btnText}</button>
            </div>
    </div>

</>
  )
}
