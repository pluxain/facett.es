# facett.es

Personal project: create facettes of yourself to facilitate job application process.

## Architecture

The package manager is `npm`

This is a monorepo with two workspaces/packages: backend and frontend. Please make sure to specify which workspace is targeted when operation and `npm` command using `-w=target-workspace` in the command line.

For example in order to add a dependency to the `backend` package do so:

```
npm install my-dependency -w=backend
```

## frontend

Uses [Vite](https://vitejs.dev) + [Vue](https://vuejs.org/) + [Tailwind](https://tailwindcss.com)

Environment variables have to be set properly in an `.env` file in the `frontend` folder

In order to run the frontend locally, please run `npm run frontend:dev` at the root of the project.

## backend

Uses [NodeJs](https://nodejs.org) + [ExpressJs](http://expressjs.com/) + [better-sqlite3](https://github.com/WiseLibs/better-sqlite3) + [drizzle](https://orm.drizzle.team/) + [Zod](https://zod.dev)

Environment variables have to be set properly in an `.env` file in the `backend` folder

In order to run the backend locally, please run `npm run backend:dev` at the root of the project.