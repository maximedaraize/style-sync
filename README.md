![cover](src/img/cover.jpg)

**Table of Contents:**

* [Style Sync](#style-sync)
* [User Guide](#user-gudie)
* [Contribution](#contribution)
* [Project setup](#project-setup)

# Style Sync

This is a plugin for Figma that apply styles in your entire projects files to elements that match those styles properties automaticly.
## User Guide

When running the plugin, you will be prompted to seclect a style category to apply to your elements.
Select the category that you want to apply to your elements, then click on the "Apply" button.


### Colors

Apply your colors styles to each element with the same sRBG value. For example, if you have a style called `brand-blue` with the value `#235DF2`, you can apply it to all elements with the same value.


## Contribution

You can contribute to this project by:
- creating an issue
- starting a discussion
- sharing ideas
- etc

Please reade our[ code of conduct](https://github.com/maximedaraize/style-sync/blob/develop/.github/CODE_OF_CONDUCT.md)

## Project setup

Below are the steps to get your plugin running. You can also find instructions at:

  https://www.figma.com/plugin-docs/setup/

This plugin template uses Typescript and NPM, two standard tools in creating JavaScript applications.

First, download Node.js which comes with NPM. This will allow you to install TypeScript and other
libraries. You can find the download link here:

  https://nodejs.org/en/download/

Next, install TypeScript using the command:

  npm install -g typescript

Finally, in the directory of your plugin, get the latest type definitions for the plugin API by running:

  npm install --save-dev @figma/plugin-typings

If you are familiar with JavaScript, TypeScript will look very familiar. In fact, valid JavaScript code
is already valid Typescript code.

TypeScript adds type annotations to variables. This allows code editors such as Visual Studio Code
to provide information about the Figma API while you are writing code, as well as help catch bugs
you previously didn't notice.

For more information, visit https://www.typescriptlang.org/

Using TypeScript requires a compiler to convert TypeScript (code.ts) into JavaScript (code.js)
for the browser to run.

We recommend writing TypeScript code using Visual Studio code:

1. Download Visual Studio Code if you haven't already: https://code.visualstudio.com/.
2. Open this directory in Visual Studio Code.
3. Compile TypeScript to JavaScript: Run the "Terminal > Run Build Task..." menu item,
    then select "npm: watch". You will have to do this again every time
    you reopen Visual Studio Code.

That's it! Visual Studio Code will regenerate the JavaScript file every time you save.

