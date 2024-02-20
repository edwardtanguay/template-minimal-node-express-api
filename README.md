# Node/Express API Starter Template

## This is a Node/Express API that has two purposes:

  -   (1) serves as a template that you can use to customize, e.g. replace the lowdb database with SQLite, MySQL, Postgres, MongoDB, etc.
  -   (2) serves as code to learn the basics of creating an API with Node/Express/TypeScript plus many features

![grafik](https://github.com/edwardtanguay/template-api-node-express-typescript-es6-modules-lowdb/assets/446574/ccdb272c-59d5-434b-8dd7-7623390d98c5)

## This is a template API to use to start new API projects

- If you want to learn how to build this API step-by-step, see:
  - **HOWTO: [LearnApp Project: Fullstack app with full local CRUD frontend/backend which publishes read-only site at Vercel](https://tanguay-eu.vercel.app/howtos/805)**

## FEATURES

- Node/Express
- TypeScript
  - executed with tsx
  - compiled with tsc
  - watched with nodemon
- ES6 modules
- lowdb as database (JSON file)
- routers
- handlers (controllers)
- middleware
  - clean and validate data
  - maintenance mode
  - graceful error catching (e.g. if database fails)
- testing
  - Vitest/Supertest 
  - VSCode REST Client
- logging 
  - winston 
  - morgan
- start scripts for hosting: 
  - `npm run build` 
  - `npm start`

## TypeScript

-   using `nodemon` and `tsx`, all ts files are watched and reloaded upon being changed
    -   `tsx` executes very fast which is a good user experience, i.e. you can make a change and immediately test it in the API
    -   `package.json` has two scripts set up to host this API at a hosting provider such as Render or Cyclic, or a cloud computer such as at Hetzner or DigitalOcean:
        -   `npm run build` - will build a /dist folder that has the compiled JavaScript files
        -   `npm start` - will start this compiled version of the API
-   note that when you import a **.ts** file, you need to provide a **.js** extension
    -   this is because we are using the `"module": "nodenext"` in **tsconfig.json** ([info](https://www.totaltypescript.com/relative-import-paths-need-explicit-file-extensions-in-ecmascript-imports))
    -   and we have to use `"module": "nodenext"` because we are using lowdb [info](<[info](https://github.com/typicode/lowdb/issues/554)>)
    -   if you switch your datasouce from lowdb to something else, you can go back to using no extensions for TypeScript imports if you switch to `"module": "es2022"`

![grafik](https://github.com/edwardtanguay/template-api-node-express-typescript-es6-modules-lowdb/assets/446574/c01c6670-f54a-45a5-9d4e-aa106547b645)

## Testing

### Vitest/Supertest

-   run tests with `npm t`
-   see: `src/server.test.ts`
    -   currently only GET routes are tested
    -   for non-GET routes, you would have to mock the database

![grafik](https://github.com/edwardtanguay/template-api-node-express-typescript-es6-modules-lowdb/assets/446574/e7c3743b-3c83-4876-abb0-3d36d2ad6060)

### REST Client

-   required VSCode extension: [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)
-   see: `test.rest`

![grafik](https://github.com/edwardtanguay/template-api-node-express-typescript-es6-modules-lowdb/assets/446574/f982aaa7-6ad6-46a9-a2a9-a31a8196f4ab)

## lowdb database

- lowdb was chosen for this template as a simple database that saves data as human-readable text in a JSON file
- it works well and could be used for e.g. local developer tools, etc.
- but in most cases you will want to replace it with a database such as MySQL, Postgres or MongoDB

![grafik](https://github.com/edwardtanguay/template-api-node-express-typescript-es6-modules-lowdb/assets/446574/066e8a78-b45a-4029-820e-c8745d20f3c7)

## middleware

- there are a few instances of middleware implemented, see **src/middleware**
- note the middleware also at the bottom of **server.ts** which catches any thrown errors in the application, e.g. if the database does not exist, etc.

![themesaaskdmaint](https://github.com/edwardtanguay/template-api-node-express-typescript-es6-modules-lowdb/assets/446574/04069f72-8145-40e5-ba74-4c1ccf26ec77)

## logging

- logging is implemented and uses both **winston** and **morgan**
- see **server.ts**
```
app.use(morganRouteLogger);
```

![grafik](https://github.com/edwardtanguay/template-api-node-express-typescript-es6-modules-lowdb/assets/446574/2fae40ce-ce8b-4153-8d95-f423222c7e26)

## hosting

- the package json has two scripts ready for hosting: `build` and `start`
- if you want to host this backend at a hosting service such as **Render** or **Cyclic**, or a cloud machine at e.g. **Hetzner** or **DigitalOcean**, use these scripts:
  - build command: `npm i && npm run build`
  - start command: `npm start`

![grafik](https://github.com/edwardtanguay/template-api-node-express-typescript-es6-modules-lowdb/assets/446574/4c57128a-c648-4c9a-9c3f-509fc1fb72aa)
