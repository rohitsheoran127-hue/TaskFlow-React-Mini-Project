export default function StatsCard({ title, count }) {
    return (
        <div className="stats-card">
            <h5>{title}</h5>
            <h2>{count}</h2>
        </div>
    );
}