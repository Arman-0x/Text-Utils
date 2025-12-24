import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
//import About from './components/About';
import React, { useState } from 'react';
{/*import { BrowserRouter as Router, Routes, Route } from "react-router-dom";*/}

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showalert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => setAlert(null), 3000);
  };

  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showalert("Dark mode has been enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showalert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
     
      {/* <Router>*/}
      <Navbar title="TextUtils" mode={mode} togglemode={togglemode} />
      <Alert alert={alert} />
      <div className="container my-3">
       {/* <Routes>*/}
         {/* <Route path="/about" element={<About />} />*/}
{/*          <Route path="/" element={<Textform showalert={showalert} heading="Textform" mode={mode} />} />
*/}         
 <Textform showalert={showalert} heading="Textform" mode={mode} />
       </div> 
      {/* </Routes>*/}
    
   {/*</Router>*/}
    
    </>
  );
}

export default App;
