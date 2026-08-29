"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: any) => {
    e.preventDefault();

    if (!email || !password) {
      setMessage("Please enter your email and password.");
      return;
    }

    setLoading(true);
    setMessage("Checking your account...");

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message || "Login failed.");
        setLoading(false);
        return;
      }

      setMessage("Login successful! 🎉");

      // The database decides the user's role.
      if (data.role === "administrator" || data.role === "admin") {
        router.push("/admin");
      } else if (data.role === "manager") {
        router.push("/manager");
      } else if (data.role === "employee") {
        router.push("/employee");
      } else {
        setMessage("Your account has an unknown role.");
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
      setMessage(
        "Cannot connect to the server. Make sure your backend is running."
      );
      setLoading(false);
    }
  };

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: Arial, Helvetica, sans-serif;
        }

        .page {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 30px;
          overflow: hidden;
          position: relative;
          background: linear-gradient(
            135deg,
            #dbeafe,
            #fce7f3,
            #ede9fe
          );
        }

        /* BACKGROUND DECORATIONS */

        .circle {
          position: absolute;
          border-radius: 50%;
          opacity: 0.45;
          animation: floating 5s ease-in-out infinite;
        }

        .circle1 {
          width: 100px;
          height: 100px;
          background: #93c5fd;
          top: 8%;
          left: 8%;
        }

        .circle2 {
          width: 70px;
          height: 70px;
          background: #f9a8d4;
          bottom: 10%;
          right: 8%;
          animation-delay: 1s;
        }

        .circle3 {
          width: 45px;
          height: 45px;
          background: #c4b5fd;
          top: 15%;
          right: 13%;
          animation-delay: 2s;
        }

        .star {
          position: absolute;
          font-size: 30px;
          animation: spin 5s linear infinite;
        }

        .star1 {
          top: 18%;
          left: 20%;
        }

        .star2 {
          bottom: 18%;
          right: 20%;
          animation-delay: 2s;
        }

        @keyframes floating {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-25px);
          }
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        /* MAIN CARD */

        .card {
          width: 950px;
          max-width: 100%;
          min-height: 580px;
          display: flex;
          position: relative;
          z-index: 2;
          overflow: hidden;
          border-radius: 30px;
          background: rgba(255, 255, 255, 0.96);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.16);
          animation: cardAppear 0.8s ease;
        }

        @keyframes cardAppear {
          from {
            opacity: 0;
            transform: translateY(35px) scale(0.94);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        /* LEFT SIDE */

        .welcome {
          width: 50%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 30px;
          position: relative;
          background: linear-gradient(
            160deg,
            #bfdbfe,
            #ddd6fe,
            #fbcfe8
          );
        }

        .welcome h2 {
          margin: 0 0 5px;
          color: #3730a3;
          font-size: 30px;
        }

        .welcome p {
          color: #4b5563;
          margin-top: 5px;
        }

        /* CARTOON PERSON */

        .person {
          width: 240px;
          height: 350px;
          position: relative;
          margin-top: 10px;
          animation: personMove 4s ease-in-out infinite;
        }

        @keyframes personMove {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-12px);
          }
        }

        /* HAIR */

        .hair {
          position: absolute;
          width: 115px;
          height: 95px;
          left: 63px;
          top: 5px;
          background: #4b2e1f;
          border-radius: 55% 55% 40% 40%;
          z-index: 3;
        }

        /* HEAD */

        .head {
          position: absolute;
          width: 105px;
          height: 120px;
          left: 68px;
          top: 28px;
          background: #f4b183;
          border-radius: 48%;
          z-index: 4;
        }

        /* EYES */

        .eye {
          position: absolute;
          width: 11px;
          height: 15px;
          top: 48px;
          background: #111827;
          border-radius: 50%;
        }

        .eyeLeft {
          left: 25px;
        }

        .eyeRight {
          right: 25px;
        }

        /* NOSE */

        .nose {
          position: absolute;
          width: 8px;
          height: 10px;
          left: 49px;
          top: 66px;
          border-radius: 50%;
          background: #d28b62;
        }

        /* SMILE */

        .smile {
          position: absolute;
          width: 38px;
          height: 18px;
          left: 34px;
          bottom: 22px;
          border-bottom: 4px solid #9f1239;
          border-radius: 50%;
        }

        /* BODY */

        .body {
          position: absolute;
          width: 130px;
          height: 140px;
          left: 55px;
          top: 145px;
          background: #6366f1;
          border-radius: 35px 35px 20px 20px;
          z-index: 2;
        }

        /* SHIRT DECORATION */

        .shirtSymbol {
          position: absolute;
          color: white;
          font-size: 28px;
          left: 50px;
          top: 45px;
        }

        /* ARMS */

        .arm {
          position: absolute;
          width: 38px;
          height: 110px;
          top: 150px;
          background: #f4b183;
          border-radius: 30px;
          z-index: 1;
        }

        .armLeft {
          left: 25px;
          transform: rotate(15deg);
        }

        .armRight {
          right: 25px;
          transform: rotate(-15deg);
        }

        /* LEGS */

        .leg {
          position: absolute;
          width: 43px;
          height: 100px;
          top: 275px;
          background: #374151;
          border-radius: 22px;
        }

        .legLeft {
          left: 72px;
        }

        .legRight {
          right: 72px;
        }

        /* SHOES */

        .shoe {
          position: absolute;
          width: 60px;
          height: 28px;
          top: 340px;
          background: #111827;
          border-radius: 20px;
        }

        .shoeLeft {
          left: 50px;
        }

        .shoeRight {
          right: 50px;
        }

        /* RIGHT SIDE LOGIN */

        .login {
          width: 50%;
          padding: 65px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .login h1 {
          margin: 0;
          color: #1f2937;
          font-size: 36px;
        }

        .subtitle {
          margin: 8px 0 30px;
          color: #6b7280;
        }

        /* INPUTS */

        .inputBox {
          margin-bottom: 20px;
        }

        .inputBox label {
          display: block;
          margin-bottom: 8px;
          color: #374151;
          font-weight: bold;
        }

        .inputBox input {
          width: 100%;
          padding: 15px;
          border: 2px solid #e5e7eb;
          border-radius: 13px;
          outline: none;
          font-size: 15px;
          transition: all 0.3s ease;
        }

        .inputBox input:focus {
          border-color: #6366f1;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(99, 102, 241, 0.15);
        }

        /* LOGIN BUTTON */

        .loginButton {
          width: 100%;
          border: none;
          border-radius: 13px;
          padding: 15px;
          background: linear-gradient(
            135deg,
            #6366f1,
            #8b5cf6
          );
          color: white;
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .loginButton:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(99, 102, 241, 0.3);
        }

        .loginButton:active {
          transform: scale(0.97);
        }

        .loginButton:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        /* MESSAGE */

        .message {
          min-height: 24px;
          margin-top: 18px;
          text-align: center;
          color: #4b5563;
          font-size: 14px;
        }

        /* RESPONSIVE */

        @media (max-width: 750px) {
          .card {
            flex-direction: column;
          }

          .welcome,
          .login {
            width: 100%;
          }

          .welcome {
            min-height: 430px;
          }

          .login {
            padding: 40px;
          }
        }
      `}</style>

      <main className="page">

        {/* BACKGROUND DECORATIONS */}

        <div className="circle circle1"></div>
        <div className="circle circle2"></div>
        <div className="circle circle3"></div>

        <div className="star star1">⭐</div>
        <div className="star star2">✨</div>

        <div className="card">

          {/* WELCOME / CARTOON */}

          <section className="welcome">

            <h2>Welcome Back! 👋</h2>

            <div className="person">

              <div className="hair"></div>

              <div className="head">
                <div className="eye eyeLeft"></div>
                <div className="eye eyeRight"></div>
                <div className="nose"></div>
                <div className="smile"></div>
              </div>

              <div className="arm armLeft"></div>
              <div className="arm armRight"></div>

              <div className="body">
                <div className="shirtSymbol">★</div>
              </div>

              <div className="leg legLeft"></div>
              <div className="leg legRight"></div>

              <div className="shoe shoeLeft"></div>
              <div className="shoe shoeRight"></div>

            </div>

            <p>Let's get your reports organized! ✨</p>

          </section>

          {/* LOGIN FORM */}

          <section className="login">

            <h1>Sign In</h1>

            <p className="subtitle">
              Enter your account details to continue.
            </p>

            <form onSubmit={handleLogin}>

              <div className="inputBox">

                <label htmlFor="email">
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

              </div>

              <div className="inputBox">

                <label htmlFor="password">
                  Password
                </label>

                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

              </div>

              <button
                type="submit"
                className="loginButton"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login ✨"}
              </button>

            </form>

            <p className="message">
              {message}
            </p>

          </section>

        </div>

      </main>
    </>
  );
}