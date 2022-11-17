import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import Bookings from "./pages/Bookings";
import Events from "./pages/Events";
import MainNavigation from "./components/Navigation/MainNavigation";
import AuthContext from './context/auth-context'


class App extends Component {
  state = {
    token: null,
    userId: null
  };

  login = (token, userId, tokenExpiration) => {
    this.setState({ token: token, userId: userId });
  };

  logout = () => {
    this.setState({ token: null, userId: null });
  };
  render() {
  return (
<BrowserRouter>
<React.Fragment>
<AuthContext.Provider
            value={{
              token: this.state.token,
              userId: this.state.userId,
              login: this.login,
              logout: this.logout
            }}
          >
<MainNavigation />
<main className="main-content">
<Routes>
{!this.state.token && <Route path="/" element={<Navigate to='/auth' exact />}/>}
{this.state.token && <Route path="/" element={<Navigate to='/events' exact />}/>}
{this.state.token && <Route path="/auth" element={<Navigate to='/events' exact />}/>}
{!this.state.token && ( <Route path="/auth" element={<Auth />} /> )}
 <Route path="/events" element={<Events />} />
 {this.state.token && (<Route path="/bookings" element={<Bookings />} /> )}      
 </Routes>
 </main>
 </AuthContext.Provider>
 </React.Fragment>
</BrowserRouter>
  );
}
}
export default App;
