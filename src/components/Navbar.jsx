import "./Navbar.css";

export default function Navbar({name}) {
    return (
        <header className="navbar">
            <div>
                <h3>Dashboard</h3>
                <p>Welcome back! Here's your overview.</p>
            </div>
            <div className="user-profile">
                <span>R</span>
                <div>
                    <h5>{name}</h5>
                    <small>Admin</small>
                </div>
            </div>
        </header>
    );
}