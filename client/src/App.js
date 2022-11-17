import React from 'react';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import Bookings from "./pages/Bookings";
import Events from "./pages/Events";
import MainNavigation from "./components/Navigation/MainNavigation";


function App() {
  return (
<BrowserRouter>
<React.Fragment>
<MainNavigation />
<main className="main-content">
<Routes>
<Route path="/" element={<Navigate to='/auth' exact />}/>
<Route path="/auth" element={<Auth />} />
 <Route path="/events" element={<Events />} />
  <Route path="/bookings" element={<Bookings />} />        
 </Routes>
 </main>
 </React.Fragment>
</BrowserRouter>
  );
}

export default App;
