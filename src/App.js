import logo from "./logo.svg";
import { Routes, Route } from "react-router-dom";
import { Products } from "./pages";
import { Navbar } from "./components";

function App() {
  return (
    <div className="flex flex-col justify-between">
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
