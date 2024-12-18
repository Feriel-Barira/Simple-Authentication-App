import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    if (!token || !userId) {
      navigate("/Auth/Login");
      return;
    }

    const fetchUserProfile = async () => {
      try {
        const response = await fetch(`http://localhost:3004/users/${userId}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch the user profile.");
        }

        const data = await response.json();
        setUser(data);
        setLoading(false);
      } catch (err) {
        setError(`Error fetching user profile: ${err.message}`);
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [navigate]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const isEditable = user && user.id === 2;

  return (
    <div className="profile-container">
      <div className="profile-content">
        <h2>User Profile</h2>
        <p>
          <strong>Name:</strong> {user.firstName}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        {isEditable && (
          <button>
            Edit Profile
          </button>
        )}
      </div>
    </div>
  );
};

export default Profile;
