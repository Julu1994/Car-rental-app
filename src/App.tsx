import Home from "./pages/home";
import "./app.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./organism/navbar";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    position: relative;
`;
function App() {
    return (
        <Container>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </Router>
        </Container>
    );
}

export default App;
