import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Product_detals from "./Components/Product_detals/Product_detals";
import Footer from "./Components/Footer/Footer";
import AdminPage from "./Components/AdminPage/AdminPage";
import Login from "./Components/LoginPage/Login";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute"; 
import Kate from "./Components/Kategory/Kate";
function App() {
  const location = useLocation(); 

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [location.pathname]); 

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
        <Route path="/kate" element={<Kate />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
