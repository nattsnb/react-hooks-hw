import React, { useEffect, useState, useMemo } from "react";

export const CompletedTasksList = () => {
  const todos = [
    {
      id: 1,
      title: "Get milk",
      isCompleted: true,
    },
    {
      id: 2,
      title: "Fix the faucet in the kitchen",
      isCompleted: true,
    },
    {
      id: 3,
      title: "Go jogging",
      isCompleted: false,
    },
    {
      id: 4,
      title: "Read a book",
      isCompleted: false,
    },
  ];

  const [showTitle, setShowTitle] = useState(true);
  const handleClick = () => {
    setShowTitle(false);
  };
  return (
    <>
      <button onClick={handleClick}>Hide title</button>
      <CompletedTodos allTodos={todos} showTitle={showTitle} />
    </>
  );
};

const CompletedTodos = (props) => {
  const completedTasks = useMemo(() => {
    console.log(props.allTodos);
    return props.allTodos.filter((task) => {
      return task.isCompleted;
    });
  }, []);
  return (
    <div>
      {props.showTitle && <h1>To Do List - completed tasks only</h1>}
      <ul>
        {completedTasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
};
