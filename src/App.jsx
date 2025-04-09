import react from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checklist from "./pages/checkList";
import TemperatureManagement from "./pages/temperature";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Checklist />} />
          <Route path="/checklist" element={<Checklist />} />
          <Route path="/temperature" element={<TemperatureManagement />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
