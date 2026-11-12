import RecentTasks from "../components/RecentTasks";
import StatsCard from "../components/StatsCard";
import "./Dashboard.css";
import AddTask from "../components/AddTasks";
import { useState, } from "react";

export default function Dashboard({tasks,setTasks}) {

    const handleAddTask = (newTask) => {
        setTasks((prevTasks) => [newTask, ...prevTasks]);
    }

    const handleCompleteTask = (id) => {
        setTasks((prevTasks) =>
            prevTasks.map((item) =>
                item.id === id
                    ? { ...item, status: "Completed" }
                    : item
            )
        );
    };

    //  Edit Task:
    const handleEditTask = (id) => {
        const taskToEdit = tasks.find((item) => item.id === id);

        if (!taskToEdit) return;


        const updatedTitle = window.prompt(
            "Enter updated task title:",
            taskToEdit.title
        );

        if (updatedTitle === null || updatedTitle.trim() === "") {
            return;
        }

        setTasks((prevTasks) =>
            prevTasks.map((item) => item.id === id ? { ...item, title: updatedTitle.trim() } : item)
        );
    }

    // Delete button
    const handleDeleteTask = (id) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this task?"
        );

        if (!confirmDelete) return;

        setTasks((prevTasks) =>
            prevTasks.filter((item) => item.id !== id)
        );
    };

    const stats = [
        { id: 1, title: "Total tasks", count: tasks.length },
        { id: 2, title: "Completed", count: tasks.filter((item) => item.status === "Completed").length },
        { id: 3, title: "Pending", count: tasks.filter((item) => item.status === "Pending").length },
        // { id: 4, title: "Overdue", count: 3 },
    ];

    return (
        <section className="dashboard-content">
            <h1>Welcome back!</h1>
            <p>Manage your daily tasks here.</p>
            <div className="stats-container">
                {stats.map((item) => (
                    <StatsCard
                        key={item.id}
                        title={item.title}
                        count={item.count}
                    />
                ))}
            </div>
            <AddTask onAddTask={handleAddTask} />
            <RecentTasks tasks={tasks} onCompleteTask={handleCompleteTask} onEditTask={handleEditTask} onDeleteTask={handleDeleteTask}/>
        </section>
    );
}

