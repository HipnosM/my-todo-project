import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Sidebar from "./components/layout/Sidebar";
import Container from "./components/layout/Container";
import AboutUs from "./components/pages/AboutUs";

function App() {

  return (
    <Router>
      <Sidebar />

      <Container>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </Container>
    </Router>
  )
}

export default App
