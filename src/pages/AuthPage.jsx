// src/pages/AuthPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // 👈 추가
import "./AuthModal.scss";

export default function AuthPage({ defaultTab = "login" }) {
  const [tab, setTab] = useState(defaultTab);
  const [form, setForm] = useState({ firstName:"", lastName:"", email:"", password:"" });
  const navigate = useNavigate(); // 👈 라우터로 이동

  const onChange = e => setForm(s => ({ ...s, [e.target.name]: e.target.value }));
  const submit = e => {
    e.preventDefault();
    alert(`${tab === "login" ? "Log In" : "Sign Up"}\n` + JSON.stringify(form,null,2));
  };

  return (
    <div style={{minHeight:"100vh", display:"grid", placeItems:"center", background:"#f6eadd", position:"relative"}}>
      {/* 👇 X 버튼 */}
      <button
        onClick={() => navigate("/")} // 홈으로 돌아가기
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          background: "transparent",
          border: "none",
          fontSize: "28px",
          cursor: "pointer",
        }}
        aria-label="Close"
      >
        ✕
      </button>

      <div className="auth-panel" style={{margin:0}}>
        <div className="tabs">
          <button className={`tab ${tab==="login"?"active":""}`} onClick={() => setTab("login")}>Log In</button>
          <button className={`tab ${tab==="signup"?"active":""}`} onClick={() => setTab("signup")}>Sign Up</button>
        </div>
        <h2 className="title">{tab==="login"?"Log In":"Sign Up"}</h2>
        <form className="auth-form" onSubmit={submit}>
          {tab==="signup" && (
            <>
              <input name="firstName" placeholder="First Name" value={form.firstName} onChange={onChange} required />
              <input name="lastName"  placeholder="Last Name"  value={form.lastName}  onChange={onChange} required />
            </>
          )}
          <input type="email" name="email" placeholder="Email" value={form.email} onChange={onChange} required />
          <input type="password" name="password" placeholder="Password" value={form.password} onChange={onChange} required />
          <button type="submit" className="submit">{tab==="login"?"Log In":"Sign up"}</button>
        </form>
        <p className="switch">
          {tab==="login"
            ? <>New here? <button className="link" onClick={()=>setTab("signup")}>Sign Up</button></>
            : <>Already a member? <button className="link" onClick={()=>setTab("login")}>Log In</button></>}
        </p>
      </div>
    </div>
  );
}
