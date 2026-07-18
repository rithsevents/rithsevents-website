import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Weddings from './pages/Wedding';
import ScrollToTop from './components/ScrollToTop';
import Birthdays from './pages/Birthdays';
import BabyShower from './pages/BabyShower';
import Catering from './pages/Catering';
import Engagement from './pages/Engagement';

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* 2. Drop it right here at the top of the Router execution tree */}
      <div className="flex flex-col min-h-screen bg-charcoal text-white">
        <Navbar />
        
        {/* Main content area where pages swap dynamically */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/weddings" element={<Weddings />} />
            <Route path="/birthdays" element={<Birthdays />} />
            <Route path="/baby-shower" element={<BabyShower />} />
            <Route path="/catering" element={<Catering />} />
            <Route path="/engagement" element={<Engagement />} />
            <Route path="*" element={<LandingPage />} />
            {/* You can add /birthdays and /surprise-decor here next */}
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;