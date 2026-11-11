import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SubjectPage from './pages/SubjectPage';

export default function App() {
  return (
    <div className="app">
      <header className="topbar">
        <Link to="/" className="brand">
          <span className="logo">Ψ</span> Psychologie Lernapp
        </Link>
      </header>
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:semester/:subject" element={<SubjectPage />} />
          <Route path="*" element={<p>Seite nicht gefunden. <Link to="/">Zur Übersicht</Link></p>} />
        </Routes>
      </main>
    </div>
  );
}
