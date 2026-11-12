import { NavLink } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
    return (
        <aside className="sidebar">

            <h2 className="sidebar-logo">
                <span>✓</span> TaskFlow
            </h2>

            <p className="menu-heading">MENU</p>

            <ul className="sidebar-menu">

                <li>
                    <NavLink to="/" end>
                        <span>▦</span> Dashboard
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/tasks">
                        <span>📋</span> Pending
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/completed">
                        <span>✓</span> Completed
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/settings">
                        <span>⚙</span> Settings
                    </NavLink>
                </li>

            </ul>
        </aside>
    );
}

export default Sidebar;