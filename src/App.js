import React, { useState } from 'react';
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#323139';
      showAlert("Dark mode has been enabled.", "success");
      document.title = "TextUtils - Dark Mode";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled.", "success");
      document.title = "TextUtils - Light Mode";
    }
  }

  return (
    <>
        <Router>
          <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
          <Alert alert={alert}/>
          <Routes>
              <Route exact path="/" element={<TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert}/>}/>
              <Route exact path="/about" element={<About />} /> 
          </Routes>
        </Router>
    </>
  );
}

export default App;