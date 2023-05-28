import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [Mode, setMode] = useState("light"); // Whether dark mode is enable or not

  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743"
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white"
    }
  };
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
      <Navbar title="TextUtils" mode={Mode} toggleMode={toggleMode} />
      {/* <Navbar /> */}
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze below" mode={Mode}/>
      </div>
    </>
  );
}

export default App;
