"use client";

// import { Button } from "@/components/ui/button";

import { useState } from "react";
// import api from "@/lib/api";
import Button from "@mui/material/Button";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    // const res = await api.post("/auth/login", { email, password });
    // localStorage.setItem("token", res.data.token);
    // alert("Logged in!");
  };

  return (
    <div className="p-8 space-y-4">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 w-64 border-amber-300"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 w-64"
      />
      <Button onClick={handleLogin}>Login</Button>
    </div>
  );
}
