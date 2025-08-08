import React, { useState } from "react";
import "../styles/login.css";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Oddiy validatsiya
    if (!email || !password) {
      setError("Iltimos, barcha maydonlarni to'ldiring.");
      return;
    }

    setError("");

    // Bu yerda API chaqirig‘i yoki autentifikatsiya funksiyasini chaqirishingiz mumkin
    console.log("Login ma'lumotlari:", { email, password });

    // Masalan, login muvaffaqiyatli bo'lsa, redirect yoki state yangilash
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        {error && <div className="error-message">{error}</div>}

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          placeholder="Emailni kiriting"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Parol:</label>
        <input
          type="password"
          id="password"
          placeholder="Parolni kiriting"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Kirish</button>
      </form>
    </div>
  );
}
