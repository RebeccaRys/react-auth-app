import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const API_URL = 'https://6887d654adf0e59551b86458.mockapi.io/api/v1/users';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(API_URL, {
        email,
        password,
      });
      console.log('Registered:', res.data);
      alert('Registration successful!');
      navigate('/');
    } catch (err) {
      console.error('Registration failed:', err);
      setError('Registration failed. Try a different email.');
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <h2>Register</h2>
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

      <button type="submit">Register</button>

      <p style={{ color: 'white', textAlign: 'center' }}>
        Already have an account? <Link to="/" style={{ color: 'lightblue' }}>Login</Link>
      </p>
    </form>
  );
}

export default Register;