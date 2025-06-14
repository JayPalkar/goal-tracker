/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import styles from "./createAGoal.module.css";
import axios from "axios";
import { BASE_URL } from "@/utils/appConstants";

const CreateAGoal = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("to-do");
  const [status, setStatus] = useState("low");

  const token = localStorage.getItem("token");

  const handleCreateGoal = async () => {
    try {
      const response = await axios.post(
        `${BASE_URL}goals`,
        {
          title,
          description,
          priority,
          status,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      console.log(response);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <div className={styles.createGoalContainer}>
      <h1 className={styles.createAGoalHeader}> Create A Goal</h1>
      <form>
        <input
          type="text"
          placeholder="Enter the Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Enter the goal description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={7}
          required
        />
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="to-do">to-do</option>
          <option value="in-progress">in-progress</option>
          <option value="completed">completed</option>
          <option value="cancelled">cancelled</option>
        </select>
        <button onClick={handleCreateGoal}>Create a Goal</button>
      </form>
    </div>
  );
};

export default CreateAGoal;
