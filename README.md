# FLOPZ BOT
> The project is not in production yet, but one day it will be. I pretend to upload in Heroku platform.

> This project was stoped for unknow time. Someday I back to develop it :)

A Discord bot developed in Node.JS and Typescript. This project name is a tribute for big floppa's meme, that simple. Follow some memes:

### Classic
<img style="width: 200px;" src="https://media.tenor.com/7953eR2iLQMAAAAM/nesmog_floppa.gif">

### Spinning
<img style="width: 200px;" src="https://media.tenor.com/0gfterKZTTwAAAAC/floppa2.gif" >

### Silly ears
<img style="width: 200px" src="https://media.tenor.com/RFmgfvXWOsAAAAAS/floppa-big-floppa.gif" >

### Getting crazy
<img style="width: 200px" src="https://media.tenor.com/2rISSeSkAqsAAAAS/flop.gif" >

## Summary

- [Dependencies](#dependencies)
- [Running](#running)

## Dependencies

My Node version is `v18.16.0` and the npm is `9.7.1`. Run the `node -v` command for view your node version and run `npm -v` for npm version.

The dependencies are in the `package.json` file. Here is the dependencies list (06/11/2023 is the date I'm typing this, the versions may have been changed):
- dependencies
    - [discord.js](https://discord.js.org/): `^14.11.0`
    - [dotenv](https://www.npmjs.com/package/dotenv): `^16.1.4`
    - [express](https://expressjs.com/pt-br/): `^4.18.2`
- devDependencies
    - [@types/express](https://www.npmjs.com/package/@types/express): `^4.17.17`
    - [@types/node](https://www.npmjs.com/package/@types/node): `^20.3.0`
    - [nodemon](https://yarnpkg.com/package/nodemon): `^2.0.22`
    - [rimraf](https://yarnpkg.com/package/rimraf): `^5.0.1`
    - [ts-node](https://yarnpkg.com/package/ts-node): `^10.9.1`
    - [typescript](https://www.typescriptlang.org/): `^5.1.3`

## Running

At the root, run this:

```yarn
yarn
```

Or this, if you don't have Yarn installed:

```npm
npm i
```

After that, run any of following commands:
- `npm run build`: Will compile the `.ts` files to `.js` and put them into `./build` folder.
- `npm run start`: Runs the `npm run build` command above and run `node <file>` command.
- `npm run dev`: Runs the nodemon with `npx`.
