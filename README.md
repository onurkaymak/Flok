   <br>
    <a href="https://github.com/onurkaymak/Flok" style="display:flex;justify-content:center;">
        <img src="https://i.ibb.co/nfMH2jN/flok2.png" style="width:450px;height:100px;">
    </a>
    <p align="center">
      ___________________________
    </p>
    <!-- GitHub Link -->
    <p align="center">
        <a href=https://onurkaymak.com/">
            <strong>By Onur Kaymak</strong>
        </a>
    </p>
    <!-- Project Shields -->
    <p align="center">
        <a href="https://github.com/onurkaymak/Flok/graphs/contributors">
            <img src="https://img.shields.io/github/contributors/onurkaymak/Flok.svg?style=plastic">
        </a>
        &nbsp;
        <a href="https://github.com/onurkaymak/Flok/stargazers">
            <img src="https://img.shields.io/github/stars/onurkaymak/Flok.svg?color=yellow&style=plastic">
        </a>
        &nbsp;
        <a href="https://github.com/onurkaymak/Flok/issues">
            <img src="https://img.shields.io/github/issues/onurkaymak/Flok?style=plastic">
        </a>
        &nbsp;
        <a href="https://github.com/onurkaymak/Flok/blob/main/LICENSE.txt">
            <img src="https://img.shields.io/github/license/onurkaymak/Flok?style=plastic">
        </a>
    </p>    
</p>

<p align="center">
  <small>Initiated December 14th, 2023.</small>
</p>

<!-- Project Links -->
<p align="center">
    <a href="https://github.com/onurkaymak/Flok.git"><big>Project Docs</big></a> ·
    <a href="https://github.com/onurkaymak/Flok/issues"><big>Report Bug</big></a> ·
    <a href="https://github.com/onurkaymak/Flok/issues"><big>Request Feature</big></a>
</p>

------------------------------
<u>Table of Contents</u>
* <a href="#🌐-about-the-project">About the Project</a>
    * <a href="#📖-description">Description</a>
    * <a href="#🛠-built-with">Built With</a>
    * <a href="#🦠-known-bugs">Known Bugs</a>
    <!-- * <a href="#🔍-preview">Preview</a> -->
* <a href="#🏁-getting-started">Getting Started</a>
    * <a href="#📋-prerequisites">Prerequisites</a>
    * <a href="#⚙️-setup-and-use">Setup and Use</a>
* <a href="#🛰️-api-documentation">API Documentation</a>
* <a href="#🤝-contributors">Auxiliary</a>
    * <a href="#✉️-contact-and-support">Contact</a>
    * <a href="#⚖️-license">License</a>
------------------------------

## 🌐 About the Project

### 📖 Description

*Flok* is a fleet management tool that is made for car rental companies. It allows users to create/track vehicles in the inventory, track production status, current detailing numbers, and information about current reservations. 

All the features work based on authentication and authorization, different employee roles have different access levels in the app. These roles are "Auto Detailer", "Customer Service Agent", and "Manager".

It's a full-stack application that is built on React with Redux & ASP.NET Web API with MySQL. While Flok(this repo) works as a front-end that allows a dynamic and better user experience, Flok API allows this tool to expand on mobile development with React Native (WIP).

### 🔗 Flok API repository Link

* [Flok API](https://github.com/onurkaymak/FlokAPI)

### 🦠 Known Bugs

* If any bugs are discovered, please contact the author(s).

### 🛠 Built With
* [React](https://react.dev/)
* [Redux](https://redux.js.org/)
* [Redux Toolkit](https://redux-toolkit.js.org/)
* [React Router](https://reactrouter.com/en/main)
* [JSON Web Token (JWT)](https://jwt.io/)
* [MUI](https://mui.com/material-ui/)
* [TailwindCSS](https://tailwindcss.com/)
* [date-fns](https://date-fns.org/)
* [HTML5](https://developer.mozilla.org/en-US/docs/Glossary/HTML5)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [npm](https://www.npmjs.com/)
* [Axios](https://axios-http.com/)
------------------------------

## ⏩ Project Previews


### Landing Page

<a href="https://ibb.co/RPNscq1"><img src="https://i.ibb.co/82bf9HJ/Landing-Page.png" alt="Landing-Page" border="0"></a>

- Landing page is visible to the users who is not authenticated, authenticated users will be redirected to profile page.


### Sign In & Sign Up Pages

<div style="display:flex">
<a href="https://ibb.co/w7Q7C8b"><img src="https://i.ibb.co/xYgYGwc/SignIn.png" alt="SignIn" border="0" height="300px" style="margin-right:10px"></a>

<a href="https://ibb.co/NFTPVB9"><img src="https://i.ibb.co/QJDRbwP/SignUp.png" alt="SignUp" border="0" height="300px"></a>
</div>







## 🏁 Getting Started

### 📋 Prerequisites

⭐ As a full stack project, this application (front-end) works with Flok API (back-end), uses authentication and authorization rules for different routes. Please follow the instructions to install Flok API on your computer first.

### 🔗 Flok API repository Link

* [Flok](https://github.com/onurkaymak/FlokAPI)

### ⚙️ Setup and Use

⭐ Please note that, you must have Node.js and npm are installed on your computer to install dependencies of this application.

  #### Cloning

  1) Navigate to the [Flok repository here](https://github.com/onurkaymak/Flok).
  2) Click 'Clone or download' to reveal the HTTPS url ending with .git and the 'Download ZIP' option.
  3) Open up your system Terminal or GitBash, navigate to your desktop with the command: `cd Desktop`, or whichever location suits you best.
  4) Clone the repository to your desktop: `$ git clone https://github.com/onurkaymak/Flok.git`
  5) Run the command `cd Flok` to enter into the project directory.
  6) View or Edit:
      * Code Editor - Run the command `code .` to open the project in VisualStudio Code for review and editing.
      * Text Editor - Open by double clicking on any of the files to open in a text editor.

  #### Download

  1) Navigate to the [Flok API repository here](https://github.com/onurkaymak/FlokAPI).
  2) Click 'Clone or download' to reveal the HTTPS url ending with .git and the 'Download ZIP' option.
  3) Click 'Download ZIP' and extract.
  4) Open by double clicking on any of the files to open in a text editor.

#### Installation

1) While in the project directory, type `$ npm install` in your terminal, this will install all the dependencies from `package.json` file.
2) Type `$ npm run start` in your terminal to run this project and it will open a new tab on your browser, optionally you can go to `http://localhost:3000`
in your browser to view this project.
3) Please note that, you should have Flok API installed & running on your computer before start this application.

------------------------------

### ✉️ Contact and Support

If you have any feedback or concerns, please contact one of the contributors.

<p>
    <a href="https://github.com/onurkaymak/Flok/issues">Report Bug</a> ·
    <a href="https://github.com/onurkaymak/Flok/issues">Request Feature</a>
</p>

------------------------------

### ⚖️ License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Copyright (C) 2023 Onur Kaymak. All Rights Reserved.

```
MIT License

Copyright (c) 2023 Onur Kaymak.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```

------------------------------

## Research & Planning Log

### Fri, 12/15/2023

```
* 02:27 PM - Searching on Stack Overflow about how to check if JWT is valid or not before sending a request. (https://stackoverflow.com/questions/46418975/react-how-to-check-if-jwt-is-valid-before-sending-a-post-request)
```

### Sun, 12/17/2023
* 09:49 PM - Trying to fix a bug with JWT, I can make a request from Postman with JWT but get 401 for requests for React app.

------------------------------

<center><a href="#">Return to Top</a></center>