import Home from "./pages/home/home";
import "./app.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div``;
function App() {
    return (
        <Container>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </Router>
        </Container>
    );
}

export default App;
