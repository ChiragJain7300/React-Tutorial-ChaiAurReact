# REACT LEARNINGS

## Introduction to React (Basics)

There are two resources available to use react. First is by using the "react library" and the other is by using the "react Framework".
As react library has many limitations we prefer to use "react Frameworks" such as nextjs, remix or gatsby for the production websites
For local development you don't need frameworks, you can use different libraries for different needs.
When you are creating the complete website with react, you definitely need frameworks.
Custom setups of different libraries (react and react-dom are MUST) or Custom Frameworks can also created using Bundlers like "VITE or PARCEL"

## Installation and initialization of react

> Two ways through which we create a react files

1.  Through npx (Node Package eXecute)

    - Use `npx create-react-app <folderName>` in the folder you want to create the react folder which has all the necessary modules. (This installs all the necessary react files in the "folderName" you mentioned in the npx command)

2.  Through Bundlers like VITE
    - Use `npm create vite@latest` in the folder you want to install all the modules.
    - Vite doesn't install the modules but it provides the "package.json" file. So after all files are installed, use `npm i` to install all the modules.

As seen in both the react folders, there is always a entry js/jsx file in which the root of the HTML page is accessed.
React uses that "root" to create a virtual-DOM on which the changes occur at time of our local development and then they are replicated on the Browser-Dom which are then visible to the client/user.

The entry files in vite and CRA are "main.jsx" and "index.js" respectively.

Few Important things about the function (components)

- The first letter of the name of these functions should always be capital
- It will always return a single element
- If you have multiple elements use `<></>` to store all the elements in the empty tag
- The function should be exported
- It is not necessary to keep the file name in camel casing but it's what everyone does so
- If the function returns an html element, then it's extension should be ".jsx".


As Components are functions which return html code (JSX), we can also pass arguments to these functions which are known as "Props"

