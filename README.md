<div align=center>

# Rin Site

<img src="./images/Rin Logo V4 (GitHub).png">

[![Netlify Status](https://api.netlify.com/api/v1/badges/ec914af8-b447-481c-b83f-f9d6a0759fa6/deploy-status)](https://app.netlify.com/sites/rinbot/deploys) ![Website](https://img.shields.io/website?down_color=red&down_message=Offline&label=Website&logo=netlify&up_message=Online&url=https%3A%2F%2Frinbot.live) ![GitHub](https://img.shields.io/github/license/No767/Rin-Site?label=License&logo=github)

The Official Landing Site for [Rin](https://github.com/No767/Rin)

<div align=left>

# Building

Dependencies:

- [Node.js](https://nodejs.org/en/)
- [TailwindCSS](https://tailwindcss.com/)
- (Optional) [React](https://reactjs.org)
- Some type of IDE. This site was mainly developed with VS Code and WebStorm.

### TailwindCSS

Installing: 

`cd site/src` 

`npm install`


Compiling CSS Changes: 

If you need to edit the `tailwind-style.css` file, add in the classes and recompile it using `npx tailwindcss -i ./css/tailwind-style.css -o ./css/tailwind-style.css`. This will basically compile the changes made, and that one is going to be used as the main css file. 

### React

Installing Dependencies:

`cd site/Rin-Site-V2`

`npm install @craco/craco`

`npm install`

To open up the server, run `npm run start`

# Development

If you wish to use a live server, either use the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension, or use `npx serve`. Note that if you want to use `npx serve`, you will need Node and npm installed. Yarn will also work here.