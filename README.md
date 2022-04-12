# still-good-mern-graphql

# 🚀 Javascript full-stack 🚀

## MERN Stack

### React / Express / MongoDB / Redux

https://github.com/coding-to-music/still-good-mern-graphql

https://still-good-mern-graphql.herokuapp.com

by Victor Weinert https://github.com/vw0389

If you have any questions, feel free to connect with us through Github:

- [Victor Weinert](https://github.com/vw0389)
- [Patrick Sebstead](https://github.com/RaiderNationBuilder)
- [TJ James](https://github.com/jamestw13)
- [Melvin Welton](https://github.com/melwel74)
- [Alex McDaniel](https://github.com/alexm1937)
- [Lauren Groh](https://github.com/GrohTech)

https://github.com/vw0389/still-good

# Still Good

Still Good is a product tracking tool, designed to remedy your wasteful habits or curate your existing flow of perishable items. Built using MongoDB, Express.js, React.js, Node.js, MaterialUI, GraphQL, Mongoose, Apollo Server, Express, JSON Web Token, Bcrypt, Day.js, and React Router Dom.

## Table of Contents

- [Description](#description)
- [Instructions](#instructions)
- [Technologies Utilized](#technologies-utilized)
- [Contributions](#contributions)
- [Questions](#questions)
- [Future Features](#future-features)
- [Collaboration Requests](#collaboration-requests)

## Description

Still Good is a product tracking tool, designed to remedy your wasteful habits or curate your existing flow of perishable items. The idea is to support budget-conscious or waste-conscious people in their missions to move products from store to consumed by the expiration dates.

**Project Requirements:**

- Use React for the front end.

- Use GraphQL with a Node.js and Express.js server.

- Use MongoDB and the Mongoose ODM for the database.

- Use queries and mutations for retrieving, adding, updating, and deleting data.

- Be deployed using Heroku (with data).

- Have a polished UI.

- Be responsive.

- Be interactive (i.e., accept and respond to user input).

- Include authentication (JWT).

- Protect sensitive API key information on the server.

- Have a clean repository that meets quality coding standards (file structure, naming conventions, best practices for class and id naming conventions, indentation, high-quality comments, etc.).

- Have a high-quality README (with unique name, description, technologies used, screenshot, and link to deployed application).

**View the application, here:** [Still-Good](https://pacific-bayou-24755.herokuapp.com/)

## Instructions

| 1. New users can sign up with username/email/password              | 2. Returning users can log in with the same email/password      |
| :----------------------------------------------------------------- | :-------------------------------------------------------------- |
| ![Still Good - sign up](./assets/signup-screenshot-1.png "signup") | ![Still good - log in](./assets/login-screenshot-2.png "login") |

**3. Once logged in, users will be taken to the "Item List" page where a list of their items is stored**
![Still Good - view item list](./assets/item-list-screenshot-3.png "view-item-list")

| 5. Edit or delete items on the list                                                          | 6. Add new items to the list                                                |
| :------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------- |
| ![Still Good - edit or delete item](./assets/edit-item-screenshot-4.png "edit-delete-items") | ![Still Good - add new item](./assets/add-item-screenshot-5.png "add-item") |

## Technologies Utilized

- MongoDB
- Express.js
- React.js
- Node.js
- MaterialUI
- GraphQL
- JavaScript
- Mongoose
- Apollo Server Express
- JSON Web Token
- Bcrypt
- Day.js
- React Router Dom
- HTML
- CSS

## Contributions

**Victor Weinert**

- project management (role assignments, scheduling), frontend, schema design, GraphQL (connecting frontend to backend), Heroku deployment, testing, bug fixes

**Patrick Sebstead**

- Backend, testing, bug fixes

**TJ James**

- Frontend, initial project setup, UI design, validation, testing, bug fixes

**Melvin Welton**

- Backend, testing, bug fixes

**Alex McDaniel**

- Backend lead, testing, bug fixes

**Lauren Groh**

- Frontend, initial models & associations, validation, mutations, README, PPT slideshow, validation, mutations

## Questions

If you have any questions, feel free to connect with us through Github:

- [Victor Weinert](https://github.com/vw0389)
- [Patrick Sebstead](https://github.com/RaiderNationBuilder)
- [TJ James](https://github.com/jamestw13)
- [Melvin Welton](https://github.com/melwel74)
- [Alex McDaniel](https://github.com/alexm1937)
- [Lauren Groh](https://github.com/GrohTech)

## Future Features

1. Create desktop version
2. Tie in other food APIs so users can search for existing products
3. Set up reminders/notifications
4. Implement food safety pop ups/notes
5. Add weekly or monthly calendar view
6. Add barcode scanning API

## Collaboration Requests

If you'd like to help implement any of these future features, please get in touch with one of [us](#contributions).
To test out our project and come up with ideas to propose, follow the instructions, below:

**Fork repository:**

```
Click "Fork"
```

**Clone forked repository:**

```
git clone <repository link>
```

**Add npm dependencies:**

```
npm install
```

**Seed database:**

```
npm run seed
```

**Start servers:**

```
npm run develop
```

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## GitHub

```java
git init
git add .
git remote remove origin
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:coding-to-music/still-good-mern-graphql.git
git push -u origin main
```

## Heroku

```java
heroku create still-good-mern-graphql
```

## Heroku MongoDB Environment Variables

```java
heroku config:set

heroku config:set PUBLIC_URL="https://still-good-mern-graphql.herokuapp.com"
```

## Push to Heroku

```java
git push heroku

# or

npm run deploy
```

### Heroku Buildpack

See this repo for more info about setting up a node/react app on heroku:

https://github.com/mars/heroku-cra-node

```java
heroku buildpacks

heroku buildpacks --help

heroku buildpacks:clear

```

```java
heroku buildpacks
```

Output:

```java
=== still-good-mern-graphql Buildpack URL
heroku/nodejs
```

### Notice we are doing a SET and then and ADD

```java
heroku buildpacks:set heroku/nodejs

heroku buildpacks:add mars/create-react-app
```

Output:

```java
Buildpack added. Next release on still-good-mern-graphql will use:
  1. heroku/nodejs
  2. mars/create-react-app
Run git push heroku main to create a new release using these buildpacks.
```

### Lets try reversing the order

```java
heroku buildpacks:set mars/create-react-app

heroku buildpacks:add heroku/nodejs
```

```java
heroku buildpacks
```

Output:

```java
=== still-good-mern-graphql Buildpack URL
heroku/nodejs
```

### Push to Heroku

```
git push heroku
```

## Error:

```java
2022-04-09T03:12:56.076028+00:00 app[web.1]: ls: cannot access '/app/build/static/js/*.js': No such file or directory
2022-04-09T03:12:56.076252+00:00 app[web.1]: Error injecting runtime env: bundle not found '/app/build/static/js/*.js'. See: https://github.com/mars/create-react-app-buildpack/blob/master/README.md#user-content-custom-bundle-location
2022-04-09T03:12:56.253505+00:00 app[web.1]: Starting log redirection...
2022-04-09T03:12:56.253698+00:00 app[web.1]: Starting nginx...
```

Attempted this:

```java
heroku config:set JS_RUNTIME_TARGET_BUNDLE=./client/build/static/js/*.js

heroku config:set JS_RUNTIME_TARGET_BUNDLE=/build/static/js/*.js

# and to remote it:

heroku config:unset JS_RUNTIME_TARGET_BUNDLE

```

## update npm packages

```java
npm install -g npm-check-updates
```

Output:

```java
removed 3 packages, changed 263 packages, and audited 264 packages in 10s

29 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

```java
ncu -u
```

Output:

```java
Upgrading /mnt/volume_nyc1_01/still-good-mern-graphql/package.json
[====================] 15/15 100%

 axios                ^0.21.0  →  ^0.26.1
 bcrypt                ^5.0.0  →   ^5.0.1
 body-parser          ^1.19.0  →  ^1.20.0
 cookie-parser         ^1.4.5  →   ^1.4.6
 dotenv                ^8.2.0  →  ^16.0.0
 express              ^4.17.1  →  ^4.17.3
 express-fileupload    ^1.2.0  →   ^1.3.1
 js-cookie             ^2.2.1  →   ^3.0.1
 mongoose            ^5.10.13  →  ^6.2.10
 nodemon               ^2.0.6  →  ^2.0.15
 reactjs-popup         ^2.0.4  →   ^2.0.5
 validator           ^13.1.17  →  ^13.7.0

Run npm install to install new versions.
```

```java
npm install
```

Output:

```java
added 58 packages, removed 42 packages, changed 89 packages, and audited 299 packages in 7s

32 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

## Client directory

```java
cd client

ncu -u
```

```java
Upgrading /mnt/volume_nyc1_01/still-good-mern-graphql/client/package.json
[====================] 18/18 100%

 @testing-library/jest-dom     ^5.11.4  →  ^5.16.4
 @testing-library/react        ^11.1.0  →  ^13.0.0
 @testing-library/user-event  ^12.1.10  →  ^14.0.4
 axios                         ^0.21.0  →  ^0.26.1
 dotenv                         ^8.2.0  →  ^16.0.0
 js-cookie                      ^2.2.1  →   ^3.0.1
 node-sass                     ^4.14.1  →   ^7.0.1
 react                         ^17.0.1  →  ^18.0.0
 react-dom                     ^17.0.1  →  ^18.0.0
 react-redux                    ^7.2.2  →   ^7.2.8
 react-router-dom               ^5.2.0  →   ^6.3.0
 react-scripts                   4.0.0  →    5.0.0
 reactjs-popup                  ^2.0.4  →   ^2.0.5
 redux                          ^4.0.5  →   ^4.1.2
 redux-thunk                    ^2.3.0  →   ^2.4.1
 web-vitals                     ^0.2.4  →   ^2.1.4

Run npm install to install new versions.
```
