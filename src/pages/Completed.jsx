export default function Completed({ tasks }) {
    const completedTasks = tasks.filter(
        (item) => item.status === "Completed"
    );
    return (
        <div className="dashboard-content">
            <h1>Completed Tasks</h1>
            {completedTasks.length === 0 ? (
                <p>No completed task yet.</p>
            ) : (
                completedTasks.map((item) => (
                    <div className="stats-card" key={item.id}>
                        <h3>{item.title}</h3>
                        <p>Priority: {item.priority}</p>
                        <p>Due Date: {item.date}</p>
                        <p>Status: {item.status}</p>
                    </div>
                ))
            )}
        </div>
    );
}