import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter, Routes, Route } from 'react-router';
import AboutPage from './components/about-page';
import ReservePage from './components/reserve-page/index.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="about/" element={<AboutPage />} />
        <Route path="reserve/" element={<ReservePage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
