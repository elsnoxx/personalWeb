import { Routes, Route } from 'react-router-dom'

import Header from './components/headres'
import Footer from './components/footer'
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjetsPage';
import ContactPage from './pages/ContactPage';


function App() {
  return (
    <>
      <Header />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
