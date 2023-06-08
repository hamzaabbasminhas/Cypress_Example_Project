# Cypress Example Tests

This repository contains example tests for web UI automation using Cypress. The tests follow the **Page Object Model (POM)** design pattern for better maintainability and readability. The tests cover various scenarios for interacting with different web elements and performing common tasks. Each test file focuses on a specific topic and includes relevant test cases.

## Installation

To run the example tests locally, follow these steps:

1. Clone the repository to your local machine.
2. Install Cypress and other dependencies by running the following command:

npm install


## Running the Tests

To execute the example tests, you can use the following commands:

- Run all tests headlessly:

npm run test

- Run all tests in the Cypress Test Runner (headed mode):

npm run test-headed:Chrome


## Test Files

The repository includes the following test files under the `cypress/integration/examples` directory:

1 `test1_UIElementsInteractions.js`:
- Test cases for basic web UI elements interactions.
- Examples of radio buttons, checkboxes, buttons, and dropdowns.
- Demonstrates selecting options, checking states, and asserting expected behavior.

2 `test2_UIElementsInteractions.js`:
- Test cases for alerts, switching tabs, and related functionality.
- Covers handling alerts, confirming content, and interacting with new tabs/windows.
- Uses Cypress commands to manage alerts and navigate between tabs/windows.

3 `test3_WebTables.js`:
- Test cases for interacting with web tables.
- Includes scenarios like retrieving data based on conditions and verifying results.
- Uses Cypress commands to locate elements within tables, extract data, and perform assertions.

4 `test4_Others.js`:
- Test cases for other common UI elements and interactions.
- Covers force-clicking on hovering elements, showing hidden elements, and checking visibility.
- Demonstrates simulating user interactions and asserting visibility states.

5 `test5_iframes.js`:
- Test case for interacting with iframes.
- Demonstrates switching context to iframes and interacting with elements inside them.
- Uses Cypress-iframe plugin for simplifying iframe interactions.

6 `test6_fileUsage.js`:
- Test case for file upload functionality.
- Demonstrates uploading a file and verifying the presence of the uploaded file.
- Uses Cypress commands to select and upload a file, and assertions to verify the result.

## Page Object Model

The `cypress/integration/pageObjects/practicePage.js` file contains the page object file for the example tests. **Page objects** are a design pattern used to represent web pages and their elements in an organized and reusable manner. The `PracticePage` class in the file provides methods to interact with different elements on the web page. These methods are used in the test files to perform actions and assertions, promoting code reusability and maintainability.

## Configuration

The Cypress configuration files include the following:

- `cypress.config.js`:

- Contains environment variables and configuration options for the tests.
- The `url` variable specifies the base URL of the web application under test.
- Additional configuration options for Cypress.
- Sets the default command timeout, disables Chrome web security, and configures the Mochawesome reporter.
- The Mochawesome reporter generates stylish HTML reports, which can be found in the `cypress/reports/mochawesome-report` directory.

## Reporting

The tests use the Mochawesome reporter to generate stylish HTML reports. After running the tests, the reports can be found in the `cypress/reports/mochawesome-report` directory. Open the HTML report in any web browser to view the detailed test results.

## Docker

You can also run the tests using Docker. Follow these steps:

1. Build the Docker image by running the following command in the project directory:

   ```shell
   cocker build -t cypress-example-tests .

2. Run the tests in the Docker container:
    ```shell
    docker run --rm -it -v $PWD:/app cypress-example-tests
This command runs the Docker container, mounts the current directory as a volume inside the container (allowing access to the project files), and executes the Cypress tests inside the container.

Please note that you need to have Docker installed on your machine to use this approach.

## Dependencies
The example tests utilize the following dependencies, listed in the package.json file:

Cypress: JavaScript end-to-end testing framework.
Cypress-iframe: Plugin for interacting with iframes in Cypress.
Mocha: JavaScript test framework used by Cypress.
Mochawesome: Reporter for generating stylish HTML reports.
Mochawesome-merge: Tool for merging multiple Mochawesome reports.


## License
This project is licensed under the MIT License. Feel free to use and modify the example tests according to your needs.

Please note that these descriptions provide an overview of each file's purpose and the type of code you might find. The actual implementation and details may vary based on specific requirements and the structure of the web application being tested.




