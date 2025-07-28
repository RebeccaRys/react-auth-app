/*import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const API_URL = 'https://6887d654adf0e59551b86458.mockapi.io/api/v1/users';

function Home() {
  const email = localStorage.getItem('email');
  const isAdmin = email === 'admin@example.com';
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      if (isAdmin) {
        try {
          const res = await axios.get(API_URL);
          setUsers(res.data);
          console.log('Loaded users:', res.data);
        } catch (err) {
          console.error('Failed to fetch users:', err);
        }
      }
    };
    fetchUsers();
  }, [isAdmin]);

  const handleAddUser = async (e) => {
    e.preventDefault();
    console.log('Adding new user:', newUser);
    try {
      const res = await axios.post(API_URL, newUser);
      setUsers(prev => [...prev, res.data]);
      setNewUser({ email: '', password: '' });
    } catch (err) {
      console.error('Failed to add user:', err);
      alert('Failed to add user.');
    }
  };

  const logout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <div className="home-container">
      <h2>Welcome {email}</h2>

      <button className="button" onClick={logout}>Logout</button>

      {isAdmin && (
        <>
          <h3>Users:</h3>
          <ul className="users-list">
            {users.map((user) => (
              <li key={user.id}>{user.email}</li>
            ))}
          </ul>

          <form onSubmit={handleAddUser} className="add-user-form">
            <div className="form-control">
              <input
                value={newUser.email}
                onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                required
              />
              <label>{Array.from('Email').map((c, i) => <span key={i}>{c}</span>)}</label>
            </div>

            <div className="form-control">
              <input
                type="password"
                value={newUser.password}
                onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                required
              />
              <label>{Array.from('Password').map((c, i) => <span key={i}>{c}</span>)}</label>
            </div>

            <button type="submit">Add User</button>
          </form>
        </>
      )}
    </div>
  );
}

export default Home;*/

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const API_URL = 'https://6887d654adf0e59551b86458.mockapi.io/api/v1/users';

function Home() {
  const email = localStorage.getItem('email');
  const isAdmin = email === 'admin@example.com';
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      if (isAdmin) {
        try {
          const res = await axios.get(API_URL);
          setUsers(res.data);
          console.log('Loaded users:', res.data);
        } catch (err) {
          console.error('Failed to fetch users:', err);
        }
      }
    };
    fetchUsers();
  }, [isAdmin]);

  const handleAddUser = async (e) => {
    e.preventDefault();
    console.log('Adding new user:', newUser);
    try {
      const res = await axios.post(API_URL, newUser);
      setUsers(prev => [...prev, res.data]);
      setNewUser({ email: '', password: '' });
    } catch (err) {
      console.error('Failed to add user:', err);
      alert('Failed to add user.');
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    window.dispatchEvent(new Event('storage')); // Trigger storage event
    navigate('/');
  };

  return (
    <div className="home-container">
      <h2>Welcome {email}</h2>

      <button className="button" onClick={logout}>Logout</button>

      {isAdmin && (
        <>
          <h3>Users:</h3>
          <ul className="users-list">
            {users.map((user) => (
              <li key={user.id}>{user.email}</li>
            ))}
          </ul>

          <form onSubmit={handleAddUser} className="add-user-form">
            <div className="form-control">
              <input
                value={newUser.email}
                onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                required
              />
              <label>{Array.from('Email').map((c, i) => <span key={i}>{c}</span>)}</label>
            </div>

            <div className="form-control">
              <input
                type="password"
                value={newUser.password}
                onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                required
              />
              <label>{Array.from('Password').map((c, i) => <span key={i}>{c}</span>)}</label>
            </div>

            <button type="submit">Add User</button>
          </form>
        </>
      )}
    </div>
  );
}

export default Home;