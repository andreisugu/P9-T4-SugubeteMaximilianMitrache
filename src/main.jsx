import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.jsx';
import SuguDiagramsPage from './SuguDiagramsPage.jsx';
import './index.css';

import { HashRouter, Routes, Route, useNavigate } from 'react-router-dom';

function MainRouter() {
  return (
    <Routes>
      <Route path="/sugu-diagrams" element={<SuguDiagramsPage />} />
      <Route path="/*" element={<App />} />
    </Routes>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <MainRouter />
    </HashRouter>
  </React.StrictMode>
);
