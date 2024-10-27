# Hoot
Hoot is a notes website thing!

## Setting up Hoot

Open up command prompt:
1. Windows key + R
2. Type 'cmd' and press Enter

Navigate to the folder where you want to clone hoot
1. 'ls' to list files and directories you can change to (on powershell)
2. 'cd (dir)' to change directories <br /> 
## For only cloning a specific branch:
```
git clone -b <branch> <repo_url> 
```
For cloning the main branch:
```
git clone <repo_url> 
```
Navigate inside the repo folder
```
cd Group8Project
```
## Install Dependencies (Express, Express-Session, Mongoose, Bcrypt, EJS, MongoDB, and Mongoose)
1. "Express is a popular, lightweight, and flexible Node.js web application framework that provides a robust set of features for building web applications and APIs. It is designed to be minimalistic, allowing developers to easily create robust and scalable applications."
2. "Express-session is a middleware for Express.js that enables you to manage user sessions in your web applications. It provides a way to store data associated with a specific user across multiple requests, typically using cookies."
3. "Bcrypt is a password-hashing algorithm that protects passwords in storage by turning them into a fixed-length string of characters"
4. "EJS, or Embedded JavaScript, is a templating language that allows users to generate HTML with JavaScript."
5. "MongoDB is a non-relational database management system (DBMS) that stores data in documents instead of tables and rows. It's a popular, versatile, and flexible database that's used by over 47,000 customers across 118 regions."
6. "Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a schema-based solution to model your application data, making it easier to interact with MongoDB databases."
source: google.com AI answers
```
npm install express
npm install express-session
npm install mongoose
npm install bcrypt
npm install ejs
npm install mongodb
```
## Accept the invite to the MongoDB database
1. (should be in ufl email)
2. I continued with google with my ufl account to sign up/log in to MongoDB

## Add yourself to Network Access
1. Click Network Access near the bottom left under SECURITY
2. Click Add Current IP Address <br />

You can now type in the terminal 
```
node server.js
```
and it should run the server.js connected to the database.
If you cant Ctrl + click on the link in the terminal, go to http://localhost:3000

## Access the Database
1. Visit https://cloud.mongodb.com/v2/671b02a764ffed0f6bc9e642#/metrics/replicaSet/671b03b2c890f61f00b67c93/explorer/TestData/users/find <br />
or
2. Install MongoDB Compass GUI for your platform at https://www.mongodb.com/try/download/compass <br />
## Instructions for MongoDB Compass:
1. Click Database Access right above Network Access
2. Click ADD NEW DATABASE USER
3. Under Password Authentication:
4. Change the first entry to a username for yourself (doesn't really matter)
5. Press Autogenerate Secure password under the second entry and copy it (and maybe paste it somewhere for the Compass part)
6. Scroll down and change Built-in Role to Atlas admin
7. Click Add User in the bottom right <br />
## Then open MongoDB Compass
1. Click Add new connection
2. In the URI section, paste this and replace <db_username> with your username and <db_password> with your copied password
```
mongodb+srv://<db_username>:<db_password>@hootdb.6sb0r.mongodb.net/?retryWrites=true&w=majority&appName=HootDB
```
3. (Optional) Name, color, and favorite the connection
4. Click Save & Connect in the bottom right
5. To access data, connect to the connection and go to /TestData/users
