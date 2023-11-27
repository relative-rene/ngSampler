# NgSampler

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

Run `node backend/index.js` for express server to start running on `0.0.0.0:4000`

Run `mongod` to confirm that instance of database is active.
restart database by quiting with `kill <pid>` or `killall <pid>` then rerun mongod
note it is also possible to shutdown server by using mongo shell. 
1st run mongo
2nd show dbs
3rd use admin
4th db.shutdownServer()

## Common mongo commands in mongo shell
1st run mongo
2nd show dbs
3rd use <any visible db> if one does not exist mongo will create
4th show collections
5th db.collection.find()

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

