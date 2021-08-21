import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)

  const showAlert= (message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },3000);
  }
  
  const toggleMode= ()=>{
    if (mode === 'light') {
      setMode("dark")
      document.body.style.backgroundColor = '#191818';  
      let elems = document.getElementsByClassName('btn-group');
            for (let i=0;i<elems.length;i+=1){
              elems[i].style.visibility = 'visible';
            }
      showAlert("Dark Mode is Enabled","success");
      
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = 'white'; 
       let elems = document.getElementsByClassName('btn-group');
            for (let i=0;i<elems.length;i+=1){
              elems[i].style.visibility = 'hidden';
            }
      showAlert("Light Mode is Enabled","success");
    }
  }
  
  return (
    <>
    {/* <Router> */}
    <Navbar title='TextUtiles' mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className={`container my-3 text-${mode==='light'?'dark':'light'}`}>
    {/* <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/"> */}
          <TextForm showAlert={showAlert} heading = 'Enter the text to analyze below' />
          {/* </Route>
        </Switch> */}
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
