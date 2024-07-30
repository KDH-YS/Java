import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About2";
import { User } from "./pages/User";
import { AboutDetails } from "./pages/AboutDetails";
export function Rtt(){
  return (
    <Router>
        <nav>
         <Link to="/">홈</Link> | <Link to="/about">도움말</Link>| <Link to="/user/1">사용자</Link>
        </nav>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user/:id" element={<User/>}/>
            <Route path="/about" element={<About/>}>
                <Route path="details" element={<AboutDetails/>}/>
                </Route>
        </Routes>
    </Router>
);
}