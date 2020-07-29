**Prerequisite**

-   nodejs version 12.
-   npm

**Steps to run test suites**

1. Clone source code from the repository.

2. Run the cmd: 'npm install' to install all required libraries

    > npm install

3. Check the environment parameters in run-tests.sh file.

4. Run the cmd `npm test` to run all and `npm test suiteFileName` to run the specific test. For example:
    > npm test LoginPageTest

5. Run the cmd `npm run format` to format the code
**Report**

After running the test, a report will be generated automatically in folder test-report/timeline.
