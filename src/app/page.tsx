/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { BASE_URL } from "@/utils/appConstants";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import styles from "./page.module.css";

const Page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSignup = async () => {
    try {
      await axios.post(`${BASE_URL}auth/register`, {
        name,
        email,
        password,
      });
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
    }
  };
  return (
    <section className={styles.authSection} id="goalTrackerContainer">
      <h1 className={styles.authHeader}>Goal Tacker - Signup</h1>
      <form className={styles.formContainer}>
        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
          onClick={handleSignup}
        >
          Register
        </button>
      </form>
    </section>
  );
};

export default Page;
