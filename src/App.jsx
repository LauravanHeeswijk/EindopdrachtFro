import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import NewDadJokePage from './pages/NewDadJokePage/NewDadJokesPage.jsx';
import MyDadJokesPage from './pages/MyDadJokesPage/MyDadJokesPage.jsx';
import MyProfilePage from './pages/MyProfilePage/MyProfilePage';
import LoginRegistrationPage from './pages/LoginRegistrationPage/LoginRegistrationPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage.jsx";
import Header from "./components/Header/Header.jsx";
import { DataProvider } from "./context/DataContext.jsx";
import FavoriteList from "./components/FavoriteList/FavoriteList.jsx";
import "./components/LoadingSpinner/LoadingSpinner.css";

const App = () => {
    return (
        <DataProvider>
            <AppContent />
        </DataProvider>
    );
};

const AppContent = () => {
    const location = useLocation();
    const noHeaderRoutes = ["/login", "/registration", "/login-registration"];

    return (
        <>
            {!noHeaderRoutes.includes(location.pathname) && <Header/>}

            <Routes>
                <Route path="/" element={<>
                    <HomePage/>
                    {/*<JokeDisplay />*/}
                </>}/>
                <Route path="/new-dadjoke" element={<NewDadJokePage/>}/>
                <Route path="/my-dadjokes" element={<>
                    <MyDadJokesPage/>
                    <FavoriteList/>
                </>}/>
                <Route path="/my-profile" element={<MyProfilePage/>}/>
                <Route path="/login-registration" element={<LoginRegistrationPage/>}/>
                <Route path="/registration" element={<RegistrationPage/>}/>
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </>
    );
};

export default App;

