import { useState } from "react";
import "./Settings.css";

export default function Settings({ onSaveProfile }) {
    const [name, setName] = useState("Rohit");
    const [email, setEmail] = useState("rohit@gmail.com");
    const [message, setMessage] = useState("");

    const handleSave = (e) => {
        e.preventDefault();
        onSaveProfile(name);
        setMessage("Profile updated successfully!");
    };
    return (
        <div className="settings-page">

            <h1>Settings</h1>
            <p>Manage your account and preferences.</p>

            {/* Profile Settings */}

            <div className="setting-card">
                <h3>Profile Information</h3>

                <form onSubmit={handleSave}>

                    <label>Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />

                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <button type="submit">Save Profile</button>

                    <p>{message}</p>

                </form>
            </div>

            {/* Appearance Settings */}
            <div className="setting-card">
                <h3>Appearance</h3>

                <label>Choose Theme</label>
                <select defaultValue="Light">
                    <option>Light</option>
                    <option>Dark</option>
                </select>
            </div>

            {/* Task Preferences */}
            <div className="setting-card">
                <h3>Task Preferences</h3>

                <label>Default Task Priority</label>
                <select defaultValue="Medium">
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                </select>
            </div>

            {/* Safety Settings */}
            <div className="setting-card">
                <h3>Safety Settings</h3>

                <label className="checkbox-label">
                    <input type="checkbox" defaultChecked />
                    Confirm before deleting a task
                </label>
            </div>

        </div>
    );
}
