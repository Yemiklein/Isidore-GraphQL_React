import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Events from './pages/Events'
import Login from './pages/Login'
import Register from './pages/Register'
import Header from "./components/Header"
import "./App.css"
import { AppContext } from './utils/AppContext'

const App = () => {

    const [token, setToken] = useState(null)
    const [userId, setUserId] = useState(null)

    const user = JSON.parse(localStorage.getItem('user'))

    useEffect(() => {
        if(user){
            setToken(user.token)
            setUserId(user.userId)
        }
    }, [user])


    const login = (userId, token, tokenExp) => {
        setUserId(userId)
        setToken(token)
        localStorage.setItem('user', JSON.stringify({userId, token}));
    }

    const logout = () => {
        setUserId(null)
        setToken(null)
        localStorage.removeItem('user');
    }

    return (
        <AppContext.Provider value={{
            token: token,
            userId: userId,
            login: login,
            logout: logout
        }}>
            <div>
                <Router>
                    <Header />
                    <h1>zeh</h1>
                    <Switch>
                        {token && <Redirect from="/login" to="/" exact />}
                        {!token && <Route path="/login" component={Login} />}
                        {!token && <Route path="/register" component={Register} />}
                        {token && <Route path="/" component={Events} />}
                    </Switch>
                </Router>
            </div>
        </AppContext.Provider>
    )
}

export default App
