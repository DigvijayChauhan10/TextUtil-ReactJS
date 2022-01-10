import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar title="TextUtils" aboutText="About TextUtils" />
      <Routes>
        <Route exact path="/" element={ <TextForm key="home" heading="Enter The Text To Analyze Below" />}/>
        <Route exact path="about" element={ <About key="about" heading="About Text Util" />}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
