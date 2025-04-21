import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Counter from "./components/Counter";
import Components from "./components/Components";
import Users from "./components/Users";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/components" element={<Components />} />
        <Route path="/users" element={<Users />} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </div>
  );
}

export default App;
