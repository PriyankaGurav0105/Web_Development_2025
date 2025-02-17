import Hero from "./components/Hero";
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Hero/>
      <div className="p-6">
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/property/residential" element={<Residential />} />
          <Route path="/property/commercial" element={<Commercial />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes> */}
      </div>
    </Router>
  )
}

export default App