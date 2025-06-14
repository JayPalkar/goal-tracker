/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useState } from "react";
import styles from "./goals.module.css";
import axios from "axios";
import { BASE_URL } from "@/utils/appConstants";
import { useRouter } from "next/navigation";

interface Goal {
  title: string;
  description: string;
  priority: string;
  status: string;
}

const Goal = () => {
  const [goals, setGoals] = useState([]);

  const router = useRouter();

  const token = localStorage.getItem("token");
  useEffect(() => {
    const fetchGoals = async () => {
      try {
        const response = await axios.get(`${BASE_URL}goals`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setGoals(response.data);
      } catch (error: any) {
        console.log(error.message);
      }
    };

    fetchGoals();
  }, []);
  return (
    <div className={styles.goalsContainer}>
      <div className={styles.navbar}>
        <h1>Goals Tracker</h1>
        <button onClick={() => router.push("/create-a-goal")}>
          create-a-goal
        </button>
      </div>
      {/* {goals.map((goal: Goal, index) => (
        <div key={index}>{goal.title}</div>
      ))} */}
    </div>
  );
};

export default Goal;
