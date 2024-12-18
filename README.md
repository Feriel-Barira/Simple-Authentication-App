## Description 
A simple React application that demonstrates user authentication using JWT (JSON Web Token). The app allows users to log in, sign up, and access protected routes once authenticated. Additionally, it includes a "Profile" button on the navbar that is only accessible to logged-in users. User 2 is designated as the admin, but while the app does not explicitly include an "admin" role feature, this user has the ability to update their profile using JWT-based authentication.
### Technologies Used
**React** for building the user interface.
**React Router** for routing between pages.
**JWT** for handling authentication.
**JSON Server Auth** for backend authentication and authorization.
### Installation
#### Step 1: Install Frontend Dependencies
1. Clone the repository: [[git clone https://github.com/your-username/mu-auth-app.git]](https://github.com/Feriel-Barira/Very-Simple-Auth-App.git)
2. Navigate to the project directory: cd mu-auth-app
3. Install frontend dependencies: npm install
#### Step 2: Set Up JSON Server Auth
1. Install JSON Server and JSON Server Auth globally: npm i -g json-server json-server-auth
2. Modify the db.json file(act as your database for users and authentication data), in this exemple should initially look like this:
  {
  "users": [
  ]
}
3. Start JSON Server Auth by running the following command: json-server-auth db.json --port 3004
#### Step 3: Run the React App
In a new terminal, run the React app: npm start
