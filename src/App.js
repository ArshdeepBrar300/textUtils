
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
const lightStyle={


  color:'black'
}
const darkStyle={
  color:'white',

  backgroundColor:'#0b2d5f'
}
const redStyle={
color:'white',


backgroundColor:'#f12d40'

}
const greenStyle={
color:'white',


backgroundColor:'#1dcb7a'

}
function App() {
  const [mode,setMode]=useState('light')
  const [modeStyle,setModeStyle]=useState(lightStyle)
  const [alert,setAlert]=useState(null)
  
const updateStyle=(mode)=>{
  console.log(mode);
  if(mode=='light')
  setModeStyle(lightStyle)
else if(mode=='dark')
  setModeStyle(darkStyle)
  else if(mode=='green')
  setModeStyle(greenStyle)
  else if(mode=='red')
  setModeStyle(redStyle)
}
 const showAlert=(msg,type)=>{
  setAlert({
    msg:msg,
    type:type
  })
  setTimeout(()=>{setAlert(null)},1200)
 }
  const toggleMode=(newMode)=>{
    console.log(newMode);
    setMode(newMode)
    updateStyle(newMode)
    if(newMode=='light'){
      showAlert('Light mode activated','success')
    }
    else if(newMode=='dark'){
      showAlert('Dark mode activated','success')
    }
    else if(newMode=='green'){
      showAlert('Green mode activated','success')

    }
    else if(newMode=='red'){
      showAlert('Red mode activated','success')

    }
    
  }
 
  return (
    <div className="App" style={modeStyle}>
      <Navbar mode={mode} setMode={toggleMode} />
      {alert && <Alert alertMsg={alert.msg} alertType={alert.type}/>}
      <div className='container'>
        <TextForm mode={mode} showAlert={showAlert}  modeStyle={modeStyle}/>
      </div>

      
    </div>
  );
}

export default App;
