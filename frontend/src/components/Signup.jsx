import { useState } from 'react';

function Signup({ onSignupSuccess }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      const response = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      const data = await response.json();
      if (!response.ok) {
        setError(data.message || 'Signup failed');
        return;
      }
      setSuccess('Account created! Redirecting to login...');
      setTimeout(() => onSignupSuccess(), 1200);
    } catch (err) {
      setError('Could not connect to server. Is the backend running?');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <h3>Sign Up</h3>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default Signup;
