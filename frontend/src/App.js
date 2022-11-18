
import Navbar from './Components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import {Home} from './Pages/Home';
import {Events} from './Pages/EventsPage';
import {Bookings} from './Pages/BookingsPage';
import {LoginPage} from './Pages/LoginPage';
import {Contact} from './Pages/ContactPage';

function App() {
  return (
    <>
   <BrowserRouter>
   <Navbar />
   <div className='pages' >
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/events" element={<Events />} />
    <Route path="/bookings" element={<Bookings />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/contact" element={<Contact />} />
    </Routes>
   </div>
   </BrowserRouter>

    </>
  );
}

export default App;
