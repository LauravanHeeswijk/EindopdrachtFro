import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import NewTaskPage from './pages/NewTaskPage/NewTaskPage';
import MyTasksPage from './pages/MyTasksPage/MyTasksPage';
import MyProfilePage from './pages/MyProfilePage/MyProfilePage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/new-task" element={<NewTaskPage />} />
                <Route path="/my-tasks" element={<MyTasksPage />} />
                <Route path="/my-profile" element={<MyProfilePage />} />
            </Routes>
        </Router>
    );
};

export default App;
