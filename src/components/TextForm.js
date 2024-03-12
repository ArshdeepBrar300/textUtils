import React, { useState } from 'react'




const TextForm = ({mode,showAlert,modeStyle}) => {
    const [text,setText]=useState('')
    
   const buttonColor=()=>{
    if(mode=='dark'|| mode=='light') return 'primary'
    if(mode=='red') return 'info'
    if(mode=='green') return 'warning'
   }
    const upper=()=>{
        setText(text.toUpperCase())
        showAlert('Coverted to UpperCase','success')
    }
    const lower=()=>{
        setText(text.toLowerCase())
        showAlert('Coverted to LowerCase','success')
    }
    const clear=()=>{
        showAlert('Text Cleared','success')
        setText('')
    }
    const email=()=>{
        const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
        const extractedEmails = text.match(emailRegex) || [];
        setText(extractedEmails[0]);
        showAlert('Email extracted','success')
    }
    const copy=()=>{
        navigator.clipboard.writeText(text)
        showAlert('Text Copied','success')
    }
  return (
    <>
     <div style={modeStyle}>
        <div className="mb-3 my-4">
            <h2>Enter text</h2>
        
            <textarea className="form-control" id="input" rows="4" value={text} onChange={(e)=>{setText(e.target.value)}} style={{backgroundColor:mode=='dark'? 'grey':'white',color:mode=='dark'?'white':'black'}}></textarea>
        </div>
        <button className={`btn btn-${buttonColor()}`} onClick={upper}>Convert to Uppecase</button>
        <button className={`btn btn-${buttonColor()} ms-4`} onClick={lower}>Convert to Lowercase</button>
        <button className={`btn btn-${buttonColor()} ms-4`} onClick={clear}>Clear Text</button>
        <button className={`btn btn-${buttonColor()} ms-4`} onClick={email}>Extract Email </button>
        <button className={`btn btn-${buttonColor()} ms-4`} onClick={copy}>Copy Text </button>
    </div>
    <div className='me-5 mt-3' style={modeStyle}>
        <h2>Text Stats</h2>
        <p><i>{text.split(" ").filter(t=>t!=="").length}</i> words and <i>{text.length}</i> characters</p>
        <p>{(0.008 * text.split(" ").filter(t=>t!=="").length).toFixed(4)} min to read</p>
        <h2 className='mt-5'>Preview</h2>
        <p>{text.length>0?text:'Enter text to preview'}</p>
    </div>
  </>
  )
}

export default TextForm