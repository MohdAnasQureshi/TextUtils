import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import "./App.css";
import { useState } from "react";
import Alert from "./components/Alert";
import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");

  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setalert(null);
    }, 1500);
  };
  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
      showalert("Dark mode enabled", "success");
      // document.title = "TextUtils - Dark Mode";
      // setInterval(() => {
      //   document.title = "TextUtils - Install Now!!";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "TextUtils - Amazing";
      // }, 1500);
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showalert("Light mode enabled", "success");
      // document.title = "TextUtils - light Mode";
    }
  };
  return (
    <>
      <Navbar
        title="Textutils"
        about="About"
        mode={mode}
        togglemode={togglemode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm
          showalert={showalert}
          heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces, Convert to Uppercase and Lowercase "
          mode={mode}
        /> 

        <About mode={mode} />
       </div>
    </>
  );
}

export default App;
