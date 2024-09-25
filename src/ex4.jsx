import React, { useEffect, useState, useMemo } from 'react';

const todos = [
    {
        id: 1,
        title: "Get milk",
        isCompleted: true
    },
    {
        id: 2,
        title: "Fix the faucet in the kitchen",
        isCompleted: true
    },
    {
        id: 3,
        title: "Go jogging",
        isCompleted: false
    },
    {
        id: 4,
        title: "Read a book",
        isCompleted: false
    },
]

export const CompletedTasksList = () => {
    const [showTitle, setShowTitle] = useState(true);
    const handleClick = () => {
        setShowTitle(false);
    }
    return (
        <>
            <button onClick={handleClick}>Hide title</button>
            <CompletedTodos allTodos={todos} showTitle={showTitle}/>
        </>
    )
}

const CompletedTodos = (todos, showTitle) => {
    const isTrue = (condition) => {
        return condition
    }

    const completedTasks = useMemo(()=> {
        console.log("tasks")
        return todos.filter((task) => {return task.isCompleted})
        }
    ,[])
    return(
        <div>
            {showTitle && <h1>To Do List - completed tasks only</h1>}
                <ul>
                    {completedTasks.map((task) => (
                        <li key={completedTasks.id}>{completedTasks.title}</li>
                    ))}
                </ul>
        </div>
        )
}