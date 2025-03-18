import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div style={{overflowY:'hidden', height:'100vh'}}>
      <Header />
      <div className="page" style={{display: 'flex', height:'100%'}}>
        <Navbar />
        <div style={{padding:'20px'}}>
          Main Content
        </div>
      </div>
      <div className="footer" style={{position:'fixed', bottom:'0px', width:'100%'}}><Footer/></div>
    </div>
  );
}

export default App;
