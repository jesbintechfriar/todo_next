import React, { useState, KeyboardEvent } from "react";
import styles from "./todoView.module.scss";
import Task from "@/modules/app/models/task";
export default function TodoView() {
  const [newTask, setNewTask] = useState("");

  const [tasks, setTasks] = useState<Task[]>([]);

  // Function to add a new task to the tasks list
  const handleAddTask = () => {
    // Check if the new task is empty, if so, return and do nothing
    if (newTask.trim() === "") return;

    // Add the new task to the tasks list with a unique id and set isCompleted to false
    setTasks([
      ...tasks,
      { id: tasks.length + 1, title: newTask, isCompleted: false },
    ]);

    // Reset the newTask state to an empty string
    setNewTask("");
  };

  // Function to toggle the completion status of a task
  const handleToggleComplete = (taskId: number) => {
    // Map through the tasks list and toggle the isCompleted property of the task with the matching id
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  // Function to delete a task from the tasks list
  const handleDeleteTask = (taskId: number) => {
    // Filter the tasks list to exclude the task with the matching id
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  // Function to handle key press events for an input element
  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    // Check if the key pressed is the 'Enter' key
    if (event.key === "Enter") {
      // If so, call the handleAddTask function to add a new task
      handleAddTask();
    }
  };

  // Calculate the number of completed tasks
  const completed
  Tasks = tasks.filt
  er((task) => task.isCompleted).length;

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.textCol}>
          </div>
          <div className={styles.taskCounter}>
            {completedTasks}/{tasks.length}
          </div>
        </div>
        <div className={styles.inputContainer}>
          <input
            type="text"
            placeholder="write your next"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <button onClick={handleAddTask}>+</button>
        </div>
        <ul className={styles.taskList}>
          {tasks.map((task) => (
            <li
              key={task.id}
              className={task.isCompleted ? styles.completed : ""}
            >
              <span onClick={() => handleToggleComplete(task.id)}>
                {task.title}
              </span>
              <button onClick={() => handleToggleComplete(task.id)}>
                {task.isCompleted ? "⭕️" : "🔴"}
              </button>
              <button onClick={() => handleDeleteTask(task.id)}>🗑</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
