import "./RecentTasks.css";

export default function RecentTasks({ tasks, onCompleteTask, onEditTask, onDeleteTask }) {

    return (
        <div className="recent-tasks">
            <h3>Recent Tasks</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Priority</th>
                        <th>Status</th>
                        <th>Due Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((item) => (
                        <tr key={item.id}>
                            <td>{item.title}</td>
                            <td>{item.priority}</td>
                            <td>{item.status}</td>
                            <td>{item.date}</td>
                            <td>
                                <div className="action-buttons">

                                    {item.status === "Pending" ? (
                                        <button
                                            className="complete-btn"
                                            onClick={() => onCompleteTask(item.id)}
                                        >
                                            Complete
                                        </button>
                                    ) : (
                                        <span></span>
                                    )}

                                    <button className="edit-btn" onClick={() => onEditTask(item.id)}>Edit</button>
                                    <button
                                        className="delete-btn"
                                        onClick={() => onDeleteTask(item.id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}