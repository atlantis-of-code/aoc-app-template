# Aoc app template

This is a template that is used to generate a new `aoc application`.

See https://github.com/atlantis-of-code/aoc and the official website https://aoc-dev.io for more information!

## Using aoc-cli (recommended)

Use the `aoc-cli new app --name app-name` command. A directory name `app-name` will be created.

For your convenience there are some npm scripts:

* `npm start`: start both `client` and `server` and browse to http://localhost:4200
* `npm run cli:ge`: this will (re)generate the models and entities files by accessing and reading your database structure
* `npm run update:all`: this will update all packages in the 3 projects (client, common, and server)

## npm Packages
* [**@atlantis-of-code/aoc-client**](https://www.npmjs.com/package/@atlantis-of-code/aoc-client)
* [**@atlantis-of-code/aoc-server**](https://www.npmjs.com/package/@atlantis-of-code/aoc-server)
* [**@atlantis-of-code/aoc-cli**](https://www.npmjs.com/package/@atlantis-of-code/aoc-cli)
