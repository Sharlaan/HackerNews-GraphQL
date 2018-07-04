# Hackernews Clone (WIP)

# /!\ WIP WARNING WIP /!\

## Features

This project is a fullstack boilerplate featuring :

- [Typescript](https://www.typescriptlang.org/) everywhere !
- Material Design everywhere ! ([Material-UI](https://material-ui.com/) & [Vuetify](https://vuetifyjs.com/en/) for resp. React & Vue)
- 2 client flavors : [React](https://reactjs.org/) or [Vue](https://vuejs.org/)
- for each client flavor : shared codebase between web and native(iOS/Android) using resp. [React-Native](https://facebook.github.io/react-native/docs/getting-started.html) & [NativeScript](https://nativescript-vue.org/en/docs/introduction/)
- a graphql-based server ([GraphQL Yoga](https://github.com/prismagraphql/graphql-yoga)) featuring a [Prisma](https://www.prisma.io/) ORM, and 2 data introspection layers
- an authentication / authorization system
- a configurator CLI

## Installation

Install [NodeJS](nodejs.org), and [Docker](https://www.docker.com/community-edition#download).
... then install everything once with `npm i`.

Yarn will centralize all dependencies in the monorepo root, while lerna will expose in each repo the needed binaries (like `npx tsc`).

## Usage

This monorepo is managed with Lerna scripts :

- global updates with `yarn upgrade-interactive --latest`
- global testing (e2e + unit) with `yarn test`
- global build with `yarn build`
- global start with `yarn start`\*
- global configurator with `yarn env-config`

\*: An auto-configurator will detect `.env` files hosting your project's environment specific parameters, and if not specified, will prompt you to define them.

For Lerna usage, check `npx lerna --help`

### Data introspection

The server exposes 2 GQL playgrounds to visualize/manipulate your data :
![](https://imgur.com/k2I7NJn.png)  
![](https://imgur.com/8xK81qt.png)

- the "app" version allows you to play with datatypes exposed to the clients
- the "database" version allows you to play with datatypes exposed by the Prisma ORM.

This GUI is reachable at `localhost:4000`.

## Configuration

### Auto-configurator

At first run, a terminal prompt will ask you for :

- some param X: description
- some param Y: description
- some param Z: description

... and will write all these parameters for you in private `.env` config files, used to setup your admin authentication, dockers, database, and deployment services. [WIP](https://www.prisma.io/docs/tutorials/setup-prisma/create-new-db/postgres-eiyov7erah)

### Config customization

If you need to redefine some environment variables, you can call the configurator at any time with `yarn env-config`.

## TODO LISTS

### Monorepo

- [ ] Add auto-configurator
- [ ] Add CONTRIBUTING.md with branches naming, etc...
- [ ] Add global building
- [ ] Add global testing
- [ ] Add per-repo deployment (1 Docker per repo)

### Server

- [ ] Add Nodemon
- [ ] Review [Authentication / Authorization process](https://www.prisma.io/docs/reference/upgrade-guides/graphcool-to-prisma/authentication-and-authorization-yaeco6ieth)
- [ ] Disable Introspection in production
- [ ] Add unit tests
- [ ] Add configurable Database
- [ ] Add private .env parameters

### Client React

### Client React-Native

### Client Vue

- [ ] Watch for [vue-apollo](https://akryum.github.io/vue-apollo/guide/installation.html#apollo-client) typescript support (missing declaration file)

### Client Vue Native

## Sources

- [How to GraphQL](https://www.howtographql.com/choose/) tutorials
- [GraphQL Yoga](https://oss.prisma.io/content/GraphQL-Yoga/04-Examples.html) documentation
- [Prisma](https://www.prisma.io/docs/tutorials/setup-prisma/create-new-db/postgres-eiyov7erah) documentation
- [Apollo Client 2.0](https://www.apollographql.com/docs/react/) documentation
- [Vue-Apollo](https://github.com/Akryum/vue-apollo) repository
