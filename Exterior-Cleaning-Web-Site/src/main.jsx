import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './Pages/About';
import Payments from './Pages/Payments';
import Schedule from './Pages/Schedule';
import Services from './Pages/Services';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path='/' element={<App />}>
        <Route path='About' element={<About />}></Route>
        <Route path='Payments' element={<Payments />}></Route>
        <Route path='Schedule' element={<Schedule />}></Route>
        <Route path='Services' element={<Services />}></Route>
        </Route>
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
)
