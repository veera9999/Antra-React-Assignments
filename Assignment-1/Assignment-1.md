![Antra-logo](https://github.com/user-attachments/assets/9db2d170-9512-4225-b245-e2a71c13f171)

# Assignment - 1

===========================================================================

## What’s package.json and package-lock.json?

**_package.json:_**

🎯 **_package.json_** file is a primary configuration file for a project.

🎯 It contains the meta data of the project such as project name, version, author name, scripts and compatible range of dependencies.

🎯 It also contains devDependencies which are only needed for development phase of project.

🎯 It is generally manually edited by the developers to install the latest versions of dependencies which are compatible with the project.

🎯 It generally installes the updated versions of minors and patches of the dependencies keeping the major version same as long as the version of the dependency of the project is compatible.

**_package.lock.json:_**

🎯 **_package.lock.json_** file lists exact versions of all installed dependency packages and it's transitive dependency packages.

🎯 It ensures that the same versions of dependencies are installed in different systems for the developers to maintain consistency in the project.

🎯 It also contains detailed information about each dependency and it's transitive dependencies.

🎯 It is generally suggested for the developers to not edit this file manually to be able to revert back to the stable version of the project and maintain consistency of the project throught out various systems and is automatically generated and updated by the npm.

## What’s the difference between npm and npx?

**_npm_** is a package manager for Node.js, used to install, manage, and distribute packages. It handles dependencies and their versions and
allows running custom scripts defined in package.json.

**_npx_** is a tool for executing Node.js packages directly without installing them globally. It execute packages without installing them and
simplifies running packages that are used infrequently.

## What is babel?

🎯 **_Babel_** is a popular JavaScript compiler that allows developers to use the latest features of JavaScript while maintaining compatibility with older environments.

🎯 It converts ECMAScript 2015+ (ES6+) code to older versions of JavaScript, adds missing features and polyfill to older environments and allows for customizable transformations.

🎯 polyfill - fallback funvtion to support old browsers.

🎯 Converts JSX to regular JavaScript.

🎯 It transpiles modern JavaScript code to a widely supported version.

🎯 Babel ensures that your code runs smoothly across different environments and browsers.

## What is webpack?

🎯 Webpack is a popular open-source JavaScript module bundler.

🎯 It combines all your modules (JavaScript, CSS, images, etc.) into a single or multiple bundles.

🎯 It offers extensive configuration options to handle various assets, optimize performance, and enhance the development workflow.

🎯 Webpack minifies and optimize code for production.
