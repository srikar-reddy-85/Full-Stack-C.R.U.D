import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function LoginPage({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const dummyUsers = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
    // Add more dummy users here
  ];

  const navigate = useNavigate(); // Initialize navigate

  const handleLogin = () => {
    // Check if the entered username and password match any dummy user
    const user = dummyUsers.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      // Call the onLogin function passed from the parent component (App.js)
      onLogin();
      // Redirect to the home page using navigate
      navigate('/home');
    } else {
      setErrorMessage('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}

export default LoginPage;
