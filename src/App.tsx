import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { MacroCalculatorPage } from './pages/MacroCalculatorPage';
import { BlogPage } from './pages/BlogPage';
import { BlogDetailPage } from './pages/BlogDetailPage';
import { RecipesPage } from './pages/RecipesPage';
import { AboutPage } from './pages/AboutPage';
import { getWhatsAppUrl } from './utils/constants';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  const whatsappUrl = getWhatsAppUrl();

  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-white flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage whatsappUrl={whatsappUrl} />} />
              <Route path="/calculator" element={<MacroCalculatorPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:id" element={<BlogDetailPage />} />
              <Route path="/recipes" element={<RecipesPage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </main>
          <Footer whatsappUrl={whatsappUrl} />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
