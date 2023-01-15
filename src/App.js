import Home from "./pages/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./organism/navbar";

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
