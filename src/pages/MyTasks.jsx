import "./Dashboard.css";

export default function MyTasks({ tasks }) {
    const pendingTasks = tasks.filter(
        (item) => item.status === "Pending"
    );
    return (
        <div className="dashboard-content">

            <h1>Pending Tasks</h1>

            {pendingTasks.length === 0 ? (
                <p>No pending tasks found.</p>
            ) : (
                pendingTasks.map((item) => (
                    <div className="stats-card" key={item.id}>
                        <h3>{item.title}</h3>
                        <p>Priority: {item.priority}</p>
                        <p>Status: {item.status}</p>
                        <p>Due Date: {item.date}</p>
                    </div>
                ))
            )}

        </div>
    )
}