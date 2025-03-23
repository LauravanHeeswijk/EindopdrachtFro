import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from "./pages/HomePage/HomePage.jsx";
import NewDadJokePage from './pages/NewDadJokePage/NewDadJokesPage.jsx';
import MyDadJokesPage from './pages/MyDadJokes.jsx/MyDadJokes.jsx';
import MyProfilePage from './pages/MyProfilePage/MyProfilePage';
import LoginRegistrationPage from "./pages/LoginRegistrationPage/LoginRegistrationPage.jsx";
import LoginPage from './pages/LoginPage/LoginPage';
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage.jsx";
import Header from "./components/Header/Header.jsx";
import { DataProvider } from "./context/DataContext.jsx";
import FavoriteList from "./components/FavoriteList/FavoriteList.jsx";
import "./components/LoadingSpinner/LoadingSpinner.css";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.jsx";
import './App.css'; // <-- extra toevoegen als je daar styles zet

const App = () => {
    return (
        <DataProvider>
            <div className="app-wrapper">
                <AppContent />
            </div>
        </DataProvider>
    );
};

const AppContent = () => {
    const location = useLocation();
    const noHeaderRoutes = ["/login", "/registration", "/login-registration"];

    return (
        <>
            {!noHeaderRoutes.includes(location.pathname) && <Header />}

            <Routes>
                {/* Openbare routes */}
                <Route path="/homepage" element={<HomePage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/login-registration" element={<LoginRegistrationPage />} />
                <Route path="/registration" element={<RegistrationPage />} />
                <Route path="/login" element={<LoginPage />} />

                {/*Beveiligde routes*/}
                <Route element={<PrivateRoute />}>
                    <Route path="/new-dadjoke" element={<NewDadJokePage />} />
                    <Route path="/my-dadjokes" element={<MyDadJokesPage />} />
                    <Route path="/my-profile" element={<MyProfilePage />} />
                    <Route path="/favorites" element={<FavoriteList />} />
                </Route>
            </Routes>
        </>
    );
};

export default App;
