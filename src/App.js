// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setalert(null);
    }, 2000)
  }

  const toggle = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#353535";
      showAlert("Dark mode is enabled.", "success");
    } else {
      setmode("light")
      document.body.style.backgroundColor = "white";
      showAlert("Dark mode is disabled.", "success");
    }
  }

  return (
    <>
      <Router>
      <Navbar title="extin" home="Home" about="About Us" mode={mode} toggle={toggle} />
      <Alert alert={alert} />
      {/* <Navbar title = "FreeLancer" home="Home"/> */}
      {/* <Navbar /> */}


      <div className="container my-2">
        <Routes>
          <Route exact path="/" element={<TextForm heading="It Does Exactly What It Says On The Textin." box="Modify Text Here :" mode={mode} showAlert={showAlert} />} />
          <Route exact path="/about" element={<About mode={mode} />}> 
          </Route>
        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
