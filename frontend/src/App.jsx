import { useState } from 'react';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import ProductList from './components/ProductList';
import './App.css';

function App() {
  // Check if the user was already logged in (saved in the browser)
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [username, setUsername] = useState(localStorage.getItem('username') || '');
  const [showSignup, setShowSignup] = useState(false);

  const handleLogin = (newToken, newUsername) => {
    setToken(newToken);
    setUsername(newUsername);
    localStorage.setItem('token', newToken);
    localStorage.setItem('username', newUsername);
  };

  const handleLogout = () => {
    setToken('');
    setUsername('');
    localStorage.removeItem('token');
    localStorage.removeItem('username');
  };

  return (
    <div>
      <Navbar username={username} isLoggedIn={!!token} onLogout={handleLogout} />

      {!token ? (
        <div className="auth-container">
          {showSignup ? (
            <>
              <Signup onSignupSuccess={() => setShowSignup(false)} />
              <p>
                Already have an account?{' '}
                <button onClick={() => setShowSignup(false)}>Login</button>
              </p>
            </>
          ) : (
            <>
              <Login onLoginSuccess={handleLogin} />
              <p>
                Don't have an account?{' '}
                <button onClick={() => setShowSignup(true)}>Sign up</button>
              </p>
            </>
          )}
        </div>
      ) : (
        <ProductList token={token} />
      )}
    </div>
  );
}

export default App;
