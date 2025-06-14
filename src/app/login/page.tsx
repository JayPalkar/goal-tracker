/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import styles from "../page.module.css";
import { useRouter } from "next/navigation";
import { BASE_URL } from "@/utils/appConstants";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${BASE_URL}auth/login`, {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      router.push("/goals");
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <section className={styles.authSection}>
      <h1 className={styles.authHeader}>Goal Tacker - Login</h1>
      <form className={styles.formContainer}>
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter Your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <a className={styles.loginLink} href="/login">
          Already have an account? Login
        </a>
        <button
          className={styles.registerButton}
          type="button"
          onClick={handleLogin}
        >
          Login
        </button>
      </form>
    </section>
  );
};

export default Login;
