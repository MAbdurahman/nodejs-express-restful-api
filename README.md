# nodejs-express-restful-api

## Description 
<p>nodejs-express-restful-api is a Node.js application utilizing Express.js to build
CRUD endpoints. Node.js is a runtime environment that allows developers to run JavaScript on the server side. Express.js is a web framework for Node.js that simplifies building web applications and APIs. A REST API (Representational State Transfer Application Programming Interface) built with Node and Express, which allows different applications to communicate over HTTP using standard methods like GET, PATCH, POST, PUT, and DELETE to manage resources.</p>

## Features
- Node.js
- Express.js
- Nodemon
- Colors
- Dotenv
- Middlewares
- Postman Collection

### Create the config.env file in the config directory
```env
# Useful Variables
PORT=
NODE_ENV=
BACKEND_URL=
FRONTEND_URL=
PAGINATION_LIMIT=
CURRENCY="USD"

# MongoDB Setup
MONGO_DB_URI=

# JSON Web Token
JWT_SECRET=
JWT_EXPIRES_TIME=
JWT_LIFETIME='400d'

# Cloudinary Setup


# Stripe Setup


# Razorpay Setup


# Miscellaneous
```

### Start the app
```shell
npm install
```
or
```shell
yarn or yarn install
```
then
```shell
npm run server
```
or

```shell
yarn server
```

### Run production mode
```shell
npm run prod
```
or

```shell
yarn prod
```