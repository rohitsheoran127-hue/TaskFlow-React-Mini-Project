import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

import Dashboard from './pages/Dashboard';
import MyTasks from './pages/MyTasks';
import Completed from './pages/Completed';
import Settings from './pages/Settings';

function App() {
  const [profileName, setProfileName] = useState("Rohit");
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Complete React Project",
      priority: "High",
      status: "Pending",
      date: "13 Nov 2026"
    },
    {
      id: 2,
      title: "Practice JavaScript",
      priority: "Medium",
      status: "Completed",
      date: "05 Nov 2026"
    },
    {
      id: 3,
      title: "College Project",
      priority: "High",
      status: "Pending",
      date: "25 Nov 2026"
    },
  ]);
  return (
    <BrowserRouter>
      <div className="dashboard">
        <Sidebar />

        <main className="main-content">
          <Navbar name={profileName} />

          <Routes>
            <Route path="/" element={<Dashboard tasks={tasks} setTasks={setTasks} />} />
            <Route path="/tasks" element={<MyTasks tasks={tasks} />} />
            <Route path="/completed" element={<Completed tasks={tasks} />} />
            <Route path="/settings" element={<Settings onSaveProfile={setProfileName} />}
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
