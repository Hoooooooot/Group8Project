# Hoot

## Setting up Hoot

Open up command prompt:
1. Windows key + R
2. Type 'cmd' and press Enter

Navigate to the folder where you want to clone hoot
1. 'dir' to list files and directories you can change to
2. 'cd (dir)' to change directories <br /> 
## For only cloning a specific branch:
```
git clone -b <branch> <repo_url> 
```
For cloning the main branch:
```
git clone <repo_url> 
```
```
git clone https://github.com/Hoooooooot/Group8Project.git
```
Navigate inside the repo folder
```
cd Group8Project
```
## Install Node.js
```
https://nodejs.org/en/download/package-manager
```
## Install Dependencies in command prompt (Express, Express-Session, Mongoose, Bcrypt, EJS, MongoDB, and Mongoose)
1. "Express is a popular, lightweight, and flexible Node.js web application framework that provides a robust set of features for building web applications and APIs. It is designed to be minimalistic, allowing developers to easily create robust and scalable applications."
2. "Express-session is a middleware for Express.js that enables you to manage user sessions in your web applications. It provides a way to store data associated with a specific user across multiple requests, typically using cookies."
3. "Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a schema-based solution to model your application data, making it easier to interact with MongoDB databases."
4. "Bcrypt is a password-hashing algorithm that protects passwords in storage by turning them into a fixed-length string of characters"
5. "EJS, or Embedded JavaScript, is a templating language that allows users to generate HTML with JavaScript."
6. "MongoDB is a non-relational database management system (DBMS) that stores data in documents instead of tables and rows. It's a popular, versatile, and flexible database that's used by over 47,000 customers across 118 regions."
7. "Multer is a Node.js middleware that handles multipart/form-data, which is a common format for uploading files on the web." 
source: google.com AI answers
```
npm install express
npm install express-session
npm install mongoose
npm install bcrypt
npm install ejs
npm install mongodb
npm install multer
```

You can now type in the terminal (Make sure 
```
node server.js
```
and it should run the server.js connected to the database.
If you cant Ctrl + click on the link in the terminal, go to http://localhost:3000

## Access the Database
Visit (have to have access) https://cloud.mongodb.com/v2/671b02a764ffed0f6bc9e642#/metrics/replicaSet/671b03b2c890f61f00b67c93/explorer/TestData/users/find <br />
