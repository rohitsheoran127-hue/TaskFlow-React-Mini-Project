import { useState } from "react";
import "./AddTasks.css";

export default function AddTask({ onAddTask }) {
    const [title, setTitle] = useState("");
    const [priority, setPriority] = useState("");
    const [date, setDate] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTask = {
            id: Date.now(),
            title: title,
            priority: priority,
            status: "Pending",
            date: date
        };

        onAddTask(newTask);

        setTitle("");
        setPriority("");
        setDate("");
    }

    return (
        <div className="add-task">
            <h3>Add new Task</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter task title" value={title} onChange={(e) => setTitle(e.target.value)} />
                <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                    <option value="">Select Priority</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                <button type="submit">Add Task</button>
            </form>
        </div>
    );
}