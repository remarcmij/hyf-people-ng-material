# hyf-people-ng-material -  a sample Angular TypeScript app for Hack Your Future

This application is an Angular version of the HyfPeople application.
It was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.31.

The sample application focusses on the front-end. In order to demonstrate how to get data from a back-end using `$http`, the `json-server` npm package is used for providing a simple API on the basis of a `json` data file.

## User Requirements

The application is developed to meet the following (hypothetical) user requirements:

1. The application should show a list of Hack Your Future staff, mentors and students, with their name, role and picture (avatar).

2. When clicking on a list item, a detail screen should be shown listing the details as under (1), as well as a short bio and clickable links to the person's LinkedIn and/or Twitter accounts.

3. The application should look good on mobile devices as well as on desktops.

4. You should use Angular 2, Angular Material 2 and  TypeScript

## Getting started

1. Clone the project from GitHub to a local project folder on your development machine. Then type:

    `npm install`

2. Install `json-server` as a global npm package:

    `npm install -g json-server`

3. Type the following command to start the back-end server:

    `npm run json-server`

4. Open a second command window in the project folder and type:

   `npm start`

    This should install all the required files and then start up a local http server at port 8080.

5. Finally, point your browser to `localhost:4200`.

## Ideas for experimentation

1. Add a feature to filter the list by user role (`staff`, `mentor`, `student`)
2. Add a feature to search the list.
3. Add a feature to sort the list by first name or last name.

## Addtional challenges
1. Add a new feature area to show 'projects' and enable people to be linked to projects, in specific roles (e.g. 'developer', 'user', 'project manager' etc)
2. Replace the back-end by a custom Node/Express/MongDB server.
3. Replace the back-end by using a FireBase database.
