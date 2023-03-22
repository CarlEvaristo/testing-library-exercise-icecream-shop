import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home/Home";
import SummaryForm from "./pages/summary/SummaryForm";

function App() {
  return (
    <div className="App">
        <div className="header">
            <Link to="/" >Home</Link>
            <Link to="/summary" >Summary</Link>
        </div>

        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/summary" element={<SummaryForm/>} />
        </Routes>
    </div>
  );
}

export default App;
