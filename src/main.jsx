import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.jsx';
import SuguDiagramsPage from './SuguDiagramsPage.jsx';
import './index.css';

// Simple client-side router
function Router() {
  const [route, setRoute] = React.useState(window.location.pathname);

  React.useEffect(() => {
    const onPopState = () => setRoute(window.location.pathname);
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  // Navigation helper
  const navigate = (to) => {
    window.history.pushState({}, '', to);
    setRoute(to);
  };

  React.useEffect(() => {
    window.navigate = navigate;
  }, []);

  if (route === '/sugu-diagrams') {
    return <SuguDiagramsPage />;
  }
  return <App />;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
