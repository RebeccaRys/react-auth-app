/*import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const API_URL = 'https://6887d654adf0e59551b86458.mockapi.io/api/v1/users';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password });

    try {
      const res = await axios.get(API_URL);
      const users = res.data;
      const foundUser = users.find(
        (user) => user.email === email && user.password === password
      );

      if (foundUser) {
        localStorage.setItem('token', 'user_token');
        localStorage.setItem('email', foundUser.email);
        console.log('Login success');
        navigate('/home');
      } else {
        setError('Invalid email or password.');
      }
    } catch (err) {
      console.error('Login failed:', err);
      setError('Login failed. Try again.');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      {error && <p>{error}</p>}

      <div className="form-control">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>{Array.from('Email').map((c, i) => <span key={i}>{c}</span>)}</label>
      </div>

      <div className="form-control">
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>{Array.from('Password').map((c, i) => <span key={i}>{c}</span>)}</label>
      </div>

      <button type="submit">Login</button>

      <p style={{ color: 'white', textAlign: 'center' }}>
        Don't have an account? <Link to="/register" style={{ color: 'lightblue' }}>Register</Link>
      </p>
    </form>
  );
}

export default Login;*/

import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const API_URL = 'https://6887d654adf0e59551b86458.mockapi.io/api/v1/users';

function Login({ updateToken }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password });

    try {
      const res = await axios.get(API_URL);
      const users = res.data;
      const foundUser = users.find(
        (user) => user.email === email && user.password === password
      );

      if (foundUser) {
        updateToken('user_token'); // Use the passed function
        localStorage.setItem('email', foundUser.email);
        console.log('Login success');
        navigate('/home');
      } else {
        setError('Invalid email or password.');
      }
    } catch (err) {
      console.error('Login failed:', err);
      setError('Login failed. Try again.');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      {error && <p>{error}</p>}

      <div className="form-control">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>{Array.from('Email').map((c, i) => <span key={i}>{c}</span>)}</label>
      </div>

      <div className="form-control">
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>{Array.from('Password').map((c, i) => <span key={i}>{c}</span>)}</label>
      </div>

      <button type="submit">Login</button>

      <p style={{ color: 'white', textAlign: 'center' }}>
        Don't have an account? <Link to="/register" style={{ color: 'lightblue' }}>Register</Link>
      </p>
    </form>
  );
}

export default Login;