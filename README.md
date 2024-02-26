Kid Activity MERN App

Overview

Kid Activity MERN App is a web application designed for managing activities for kids. Built with the MERN stack (MongoDB, Express.js, React, Node.js), the app features user authentication using JWT tokens and securely stores passwords with bcrypt.

Features
Add Activities: Users can seamlessly add new activities for kids.

View Activities: Display a comprehensive list of activities with relevant details.

Edit and Delete: Users have the flexibility to edit or delete existing activities.

User Authentication: Utilizes JWT (JSON Web Tokens) for secure user authentication.

Password Security: Implements bcrypt for password hashing to ensure data security.

User-friendly Interface: Developed with React and Ant Design for an intuitive and responsive user experience.

Technologies Used

Frontend: React, Ant Design.
Backend: Node.js, Express.js.
Database: MongoDB.
Authentication: JWT, bcrypt.
HTTP Requests: Axios.

Getting Started

Prerequisites
Node.js and npm installed on your machine.
MongoDB installed locally or a connection to a MongoDB instance.
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/kid-activity-mern-app.git
cd kid-activity-mern-app
Install dependencies for both frontend and backend:

bash
Copy code
cd frontend
npm install

cd ../backend
npm install
Configuration
Create a .env file in the backend directory:

env
Copy code
MONGO_URI=your_mongo_db_connection_string
JWT_SECRET=your_jwt_secret_key
Replace your_mongo_db_connection_string with the actual connection string for your MongoDB instance and your_jwt_secret_key with a strong secret key for JWT.

Running the App
Start the backend server:

bash
Copy code
cd backend
npm start
The backend server will run on http://localhost:3001 by default.

Start the frontend:

bash
Copy code
cd frontend
npm start
The frontend development server will run on http://localhost:3000.

Open your browser and navigate to http://localhost:3000 to access the app.

User Authentication
The app ensures user authentication using JWT tokens.
Passwords are securely hashed using bcrypt for enhanced security.
Implement authentication endpoints in the backend for user login and registration.
Contributing
If you'd like to contribute to the project, please follow the contributing guidelines.

License
This project is licensed under the MIT License.

