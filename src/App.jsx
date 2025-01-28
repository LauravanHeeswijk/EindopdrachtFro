import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import NewTaskPage from './pages/NewTaskPage/NewTaskPage';
import MyTasksPage from './pages/MyTasksPage/MyTasksPage';
import MyProfilePage from './pages/MyProfilePage/MyProfilePage';
import LoginRegistrationPage from './pages/LoginRegistrationPage/LoginRegistrationPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage.jsx";
import Header from "./components/Header/Header.jsx";

const App = () => {
    const location = useLocation();
    const noHeaderRoutes = ["/login", "/registration", "/login-registration"];

    return (
        <>
            {!noHeaderRoutes.includes(location.pathname) && <Header />}

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/new-task" element={<NewTaskPage />} />
                <Route path="/my-tasks" element={<MyTasksPage />} />
                <Route path="/my-profile" element={<MyProfilePage />} />
                <Route path="/login-registration" element={<LoginRegistrationPage />} />
                <Route path="/registration" element={<RegistrationPage />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </>
    );
};

export default App;
