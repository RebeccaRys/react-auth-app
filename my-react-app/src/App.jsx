/*import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    // listen for changes in localStorage made by other components (like Login)
    const handleStorageChange = () => {
      setToken(localStorage.getItem('token'));
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={token ? <Navigate to="/home" /> : <Login setToken={setToken} />}
        />
        <Route
          path="/register"
          element={token ? <Navigate to="/home" /> : <Register />}
        />
        <Route
          path="/home"
          element={token ? <Home /> : <Navigate to="/" />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App; */

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));

  // Create a function that other components can use to update the token
  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setToken(newToken);
  };

  // Listen for storage changes (works across tabs)
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === 'token') {
        setToken(e.newValue);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={token ? <Navigate to="/home" /> : <Login updateToken={updateToken} />}
        />
        <Route
          path="/register"
          element={token ? <Navigate to="/home" /> : <Register />}
        />
        <Route
          path="/home"
          element={token ? <Home /> : <Navigate to="/" />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;