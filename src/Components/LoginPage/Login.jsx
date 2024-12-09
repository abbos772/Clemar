import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginPage = () => {
  const [phone, setLogin] = useState("");
  const [parol, setPassword] = useState("");
  const navigate = useNavigate();

  const loginSubmit = (e) => {
    e.preventDefault();

  
    const toastId = toast.loading("Logging in...");

    fetch("https://tomubackend.tomu.uz/api/auth/sign-in/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phoneNumber: phone,
        password: parol,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Error: ${res.status} - ${res.statusText}`);
        }
        return res.json();
      })
      .then((data) => {
        const token = data?.data?.tokens?.access_token;

        if (token) {
          localStorage.setItem("tokenchik", token);
          toast.update(toastId, {
            render: "Login successful!",
            type: "success",
            isLoading: false,
            autoClose: 3000,
          });
          navigate("/admin");
        } else {
          throw new Error("Token not found in response.");
        }
      })
      .catch((err) => {
        toast.update(toastId, {
          render: "Login failed: " + err.message,
          type: "error",
          isLoading: false,
          autoClose: 3000,
        });
      });
  };

  return (
    <div>
      <form onSubmit={loginSubmit}>
        +998335701001
        <input
          
          type="text"
          placeholder="Nomer tel"
          value={phone}
          onChange={(e) => setLogin(e.target.value)}
        />
        password
        <input
          type="password"
          placeholder="Parol"
          value={parol}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default LoginPage;
