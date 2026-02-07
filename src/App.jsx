import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import logo from "./assets/logo.png";

function Nav() {
  return (
    <header className="nav">
      <NavLink to="/" className="nav__brand">
        <img src={logo} className="nav__logo" alt="Comet Aerobotics logo" />
      </NavLink>

      <nav className="nav__links">
        <NavLink to="/" end className="nav__link">Home</NavLink>
        <NavLink to="/about" className="nav__link">About</NavLink>
        <NavLink to="/projects" className="nav__link">Projects</NavLink>
        <NavLink to="/contact" className="nav__link">Contact</NavLink>
      </nav>
    </header>
  );
}

export default function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
