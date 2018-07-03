# Hackernews Clone (WIP)

# /!\ WIP WARNING WIP /!\

## Features

This project is a fullstack boilerplate featuring :

- Typescript everywhere !
- Material Design everywhere ! (Material-UI & Vuetify for resp. React & Vue)
- 2 clients flavors : React or Vue
- 2 native client flavors : React-Native or (TBDforVue)
- a graphql-based server featuring a Prisma ORM
- an authentication / authorization system

## Installation

Install [NodeJS](nodejs.org), and Docker.
... then install everything once with `npm i`

Yarn will centralize all dependencies in the monorepo root, while lerna will expose in each repo the needed binaries (like `npx tsc`).

## Usage

This monorepo is managed with Lerna scripts :

- global updates with `yarn upgrade-interactive --latest`
- global testing (e2e + unit) with `yarn test`
- global build with `yarn build`
- global start with `yarn start` + project configurator the first run

For Lerna usage, check `npx lerna --help`

## Auto-configurator

At first run, a terminal prompt will ask you for :

- some param X
- some param Y
- some param Z

... and will write all these parameters for you in private `.env` config files, used to setup your admin authentication, dockers and database services.

## TODO

### Monorepo

- [x] Add auto-configurator
- [x] Add CONTRIBUTING.md with branches naming, etc...
- [x] Add global building
- [x] Add global testing
- [x] Add per-repo deployment (1 Docker per repo)

### Server

- [x] Add Nodemon
- [x] Review [Authentication / Authorization process](https://www.prisma.io/docs/reference/upgrade-guides/graphcool-to-prisma/authentication-and-authorization-yaeco6ieth)
- [x] Disable Introspection in production
- [x] Add unit tests
- [x] Add configurable Database
- [x] Add private .env parameters

### Client React

### Client React-Native

### Client Vue

### Client Vue Native
