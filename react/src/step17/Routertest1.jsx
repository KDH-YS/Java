import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom"
import { Ab } from "./Routertest2";
const Home = () => {
    return (
        <h2>홈</h2>
    );
};

export function Rtt() {
    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<Ab />} />
            </Routes>
        </Router>
    );
}