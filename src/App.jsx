import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";  
import Home from "./pages/Home";
import Eatables from "./pages/eatables";
import Wearables from "./pages/Wearables";
import About from "./pages/About"; 


import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      {/* 공통 */}
      <Header />

      {/* 라우터로 바뀌는 부분 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/eatables" element={<Eatables />} />
        <Route path="/wearables" element={<Wearables />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
