import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Product from "./components/Product";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs.jsx";
import CheckOut from "./pages/CheckOut.jsx";
import AboutUs from "./pages/AboutUs";
import CheckOut from "./pages/CheckOut";
import Admin from "./pages/Admin";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
