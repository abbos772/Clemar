import { useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Product_detals from "./Components/Product_detals/Product_detals";
import Footer from "./Components/Footer/Footer";
import AdminPage from "./Components/AdminPage/AdminPage";
import Login from "./Components/LoginPage/Login";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute"; 

function App() {
  const tokenxon = localStorage.getItem("tokenchik");

  return (
    <>
      <Navbar />

      <Routes>
  <Route path="/" element={<Home />} />
  <Route
    path="/admin"
    element={
      <ProtectedRoute>
        <AdminPage />
      </ProtectedRoute>
    }
  />
  <Route path="/login" element={<Login />} />
  <Route path="/product/:id" element={<Product_detals />} />
</Routes>

      <Footer />
    </>
  );
}

export default App;
