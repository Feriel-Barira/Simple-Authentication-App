import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Register.css";

function Register(props) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName:"",
    email: "",
    phone:"",
    address:"",
    password: "",
    confirmPassword: "",
  });

  if (props.token) {
    return <Navigate to="/" />;
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    fetch("http://localhost:3004/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: formData.firstName,
        email: formData.email,
        password: formData.password,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not OK");
        }
        return response.json();
      })
      .then((data) => {
        console.log("New user created:", data);
        const Token = `token-${Date.now()}`;
        props.setToken(Token);
        localStorage.setItem("Token", Token);
      })
      .catch((error) => {
        console.error("Error during registration:", error);
      });
  }

  return (
    <div className="register-container">
      <h2>Register</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="inputFirstName">First Name</label>
          <input
            type="text"
            className="form-control"
            id="inputFirstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="John"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputLastName">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="inputLastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Doe"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputEmail">Email</label>
          <input
            type="email"
            className="form-control"
            id="inputEmail"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="John@mail.com"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputPhone">Phone</label>
          <input
            type="number"
            className="form-control"
            id="inputPhone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="29158800"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputPassword">Password</label>
          <input
            type="password"
            className="form-control"
            id="inputPassword"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="inputConfirmPassword">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="inputConfirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Register
        </button>
        <button type="submit" className="btn btn-danger" onClick={()=>{navigate('/')}}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default Register;
