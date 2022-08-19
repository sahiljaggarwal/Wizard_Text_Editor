import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar"
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode Is Enabled", "success");
      document.title = "Wizard - Dark Mode";
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("Light Mode Has been Enabled", "success");
      document.title = "Wizard - Light Mode";
    }
  }
  return (
    <>
    <BrowserRouter>
      <Navbar title="Wizard" aboutText="Login" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3" >
       <Routes>
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />}/>
          <Route  path="/about" element={<About/>} />
       </Routes>
        {/* <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} /> */}
        
      </div>
      </BrowserRouter>
    </>
  );
}
export default App;
/*
<Switch>
<Route path="/about">
  <About />
</Route>
<Route path="/">
  <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
</Route>
</Switch>
*/