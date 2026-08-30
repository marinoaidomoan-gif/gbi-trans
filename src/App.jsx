import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { useLenis } from './hooks/useLenis';
import Header from './components/Header';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';
import WhatsAppButton from './components/WhatsAppButton';
import Accueil from './pages/Accueil';
import Services from './pages/Services';
import APropos from './pages/APropos';
import Blog from './pages/Blog';
import Faq from './pages/Faq';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import './index.css';

function AppContent() {
  useLenis();

  return (
    <>
      <Header />
      <main className="pt-[73px]">
        <PageTransition>
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/services" element={<Services />} />
            <Route path="/a-propos" element={<APropos />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageTransition>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;