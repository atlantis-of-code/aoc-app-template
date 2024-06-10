# Aoc app template

This is a template that is used to generatee a new `aoc application`.

## Using aoc-cli (recommended)

Use the `aoc-cli new app --name app-name` command. A directory name `app-name` will be created.

For your convenience there are some npm scripts:

* `npm start`: start both `client` and `server` and browse to http://localhost:4200
* `npm run cli:ge`: this will (re)generate the models and entities files by accessing and reading your database structure
* `npm run update:all`: this will update all packages in the 3 projects (client, common, and server)
