# Express & Mongo OAuth Boilerplate

## Technologies used

- Node v14.17
- Express v4.17
- MongoDB Atlas 
- Mongoose v6
- Passport v0.4.1

### Overview 

This boilerplate project adds a "user" document to a "users" collection on MongoDB Atlas alongside creating a unique cookie than can be used for authentication. Passport's Google OAuth Strategy is used to handle interaction with Google's OAuth API. Cookie Session is used to store/retrive and encrypt data from a cookie.

### Useage 

#### Set up project 

1. Create Google Develpper Project, get Google Client ID and Google Client Secret.
2. Create MongoDB Atlas Project, get MongoURI and include password. 
3. Add the keys to the config/keys.js file as strings.
4. npm install dependancies, npm run dev to start the development server

#### Authenticate user

1. localhost:5000/auth/google will route to Google OAuth Screen (unless already completed).
2. localhost:5000/api/current_user will return a cookie object if the user has been authenticated correctly.
3. localhost:5000/api/logout will log the user out.

