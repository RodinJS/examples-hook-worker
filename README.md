Express & ES6 REST API Boilerplate
==================================

[![Greenkeeper badge](https://badges.greenkeeper.io/RodinJS/examples-hook-worker.svg?token=c7225ed6296ea303caf376e8e5e9bed71d6f0d20b981acf92df4e7ed03ceac6c)](https://greenkeeper.io/)

Rodin Inc. Examples Deployment Automation API.

- ES6 support via [babel](https://babeljs.io)
- REST resources as middleware via [resource-router-middleware](https://github.com/developit/resource-router-middleware)
- CORS support via [cors](https://github.com/troygoode/node-cors)
- Body Parsing via [body-parser](https://github.com/expressjs/body-parser)

Getting Started
---------------

```sh
# clone it
git clone git@github.com:RodinJS/examples-hook-worker.git
cd examples-hook-worker

# Make it your own
rm -rf .git && git init && npm init

# Install dependencies
npm install

# Start development live-reload server
PORT=8080 npm run dev

# Start production server:
PORT=8080 npm start
```
Docker Support
------
```sh
cd express-es6-rest-api

# Build your docker
docker build -t es6/api-service .
#            ^      ^           ^
#          tag  tag name      Dockerfile location

# run your docker
docker run -p 8080:8080 es6/api-service
#                 ^            ^
#          bind the port    container tag
#          to your host
#          machine port   

```