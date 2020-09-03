# Team Generator

![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description

This app allows a user to compile a list of members that are a part of their software engineering team, and display their contact info to an HTML document for quick reference.

![Example GIF](/Develop/TeamGenerator.gif)

## Installation

This app requires the use of the Inquirer package. To install Inquirer open an integrated terminal window and run the command: `npm i inquirer`.

## Usage

Once Inquirer is installed simply run `node app.js` in the integrated terminal window. This will then prompt the user to provide input for their employees including a manager, and as many software engineers/interns as they would like to enter. Once they have entered all of their staff the user will select 'Quit' and the app will render the HTML file to the directly labeled 'Output'. Once the HTML file is opened in the browser the information of their employees is displayed.

## License

Copyright (c) 2020 robkellen

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Contributing

To contribute to this app please email me at rob.h.kellen@gmail.com

## Tests

There are test files in the 'test' directory that test the functionality of the employee building classes. To run them you will need to download Jest by entering `npm i -D jest` in your integrated terminal. Once downloaded enter the command: `npm run test` in your terminal to execute the test for each employee class.

## Questions

Please email me at rob.h.kellen@gmail.com with any questions about this project. You can also see more of my work by visiting my GitHub profile at [robkellen](https://github.com/robkellen).
