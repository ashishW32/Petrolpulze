import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { AboutPage } from './pages/AboutPage';
import { AuthPage } from './pages/AuthPage';
import { MapPage } from './pages/MapPage';
import { FindFuelPage } from './pages/FindFuelPage';
import { StationDetailsPage } from './pages/StationDetailsPage';

function App() {
  const location = useLocation();
  const showFooter = !location.pathname.startsWith('/station');
  return (
    <div className="min-h-screen bg-bg">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Navigate to="/about" replace />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/find-fuel" element={<FindFuelPage />} />
          <Route path="/station/:id" element={<StationDetailsPage />} />
          <Route path="*" element={<Navigate to="/about" replace />} />
        </Routes>
      </AnimatePresence>
      {showFooter && <Footer />}
    </div>
  );
}

export default App;
