# WTWR (What to Wear?): Back End

This back-end project is focused on creating a server for the WTWR application using express. Schema models and controllers have been used by connecting them with routes to set up API functionality. I've now added user identification, authorization and authentication using jsonwebtoken and bcrypt.

## Running the Project

`npm run start` — to launch the server

`npm run dev` — to launch the server with the hot reload feature

## Technologies and Techniques

- Schema
  ![user schema with mongoose](./demo/schema.png)

- Controller
  ![user controller creation](./demo/controller.png)

- Route
  ![user route](./demo/route.png)
  ![combining routes](./demo/combined_route.png)

- Error Handling
  ![Error handling function](./demo/error_handle.png)

- User creation
  ![bcrypt password hash](./demo/bcrypt.png)

- User login
  ![jsonwebtoken authorization](./demo/jsonwebtoken.png)
  ![authorization middleware](./demo/authorization.png)
  ![bcrypt authentication](./demo//authentication.png)

**GITHUB PAGE**

[Link to my project on Github](https://samwaxman7.github.io/se_project_express)
