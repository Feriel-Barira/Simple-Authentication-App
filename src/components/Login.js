import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = ({ setToken }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const user = Object.fromEntries(formData.entries());

    fetch("http://localhost:3004/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Invalid credentials");
        }
        return response.json();
      })
      .then((data) => {
        const token = data.accessToken;
        const userId = data.user.id;  
        console.log("Your token:", token);
        localStorage.setItem("token", token);
        localStorage.setItem("userId", userId);

        
        setToken(token);

        
        navigate('/');
      })
      .catch((error) => {
        console.error("Error:", error);
        setError("Login failed. Please check your credentials and try again.");
      });
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>

        <button type="button" className="btn btn-danger" onClick={() => navigate('/')}>Cancel</button>

        {error && <div className="error-message">{error}</div>}
      </form>
    </div>
  );
};

export default Login;
