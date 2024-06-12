import React, { createContext, useState, useContext, ReactNode } from "react";

export const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTask must be used within a TaskProvider");
  }
  return context;
};

export const TaskProvider = ({ children }) => {
  const [taskItems, setTaskItems] = useState([]);

  return (
    <TaskContext.Provider value={{ taskItems, setTaskItems }}>
      {children}
    </TaskContext.Provider>
  );
};
