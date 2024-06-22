# Random Password Generator

This project is a simple web-based random password generator built using HTML, CSS, and JavaScript. It allows users to generate passwords of varying lengths and strengths. The project also includes a testing suite using Jest to ensure the correctness of the password generation logic.

## Table of Contents

- [Demo Preview](#demo-preview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Project Structure](#project-structure)
- [Contributing](#contributing)

## Demo Preview

![Demo Preview](path/to/your/demo-preview.png)

(Add a screenshot or a link to a live demo of your project here)

## Features

- Generate passwords of customizable length (1-128 characters).
- Select password strength: Weak, Medium, or Strong.
- Display the generated password.
- Simple and clean user interface.
- Tests to ensure the password generator works correctly.

## Installation

1. **Clone the repository:**

   ```sh
   git clone git@github.com:RabbitDaCoder59/RandomPasswordGen.github.io.git1
   cd password-generator
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

## Usage

1. **Open `index.html` in your browser:**

   This can be done by simply double-clicking the `index.html` file or by serving it using a local web server.

2. **Generate a password:**

   - Select the desired password length.
   - Choose the password strength.
   - Click the "Generate Password" button.
   - The generated password will be displayed below the button.

## Testing

This project uses Jest for testing. Follow these steps to run the tests:

1. **Install Jest:**

   If you haven't already, install Jest by running:

   ```sh
   npm install --save-dev jest
   ```

2. **Run the tests:**

   ```sh
   npm test
   ```

   Jest will find and run the tests in `passwordGenerator.test.js`.

## Project Structure

- **passwordGenerator.js**: Contains the logic for generating passwords.
- **passwordGenerator.test.js**: Contains the tests for the password generator.
- **styles.css**: Styles for the web page.
- **index.html**: HTML structure of the web page.
- **package.json**: Project configuration and dependencies.
- **package-lock.json**: Exact versions of dependencies.

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request for any enhancements or bug fixes.

1. Fork the repository.
2. Create a new branch.
3. Make your changes and commit them.
4. Push to your fork and submit a pull request.
