# tddIntro
This project contains the necessary information to understand the Test driven development.

## Introduction

* Writing tests for your production code before you actually write the production code. 
* Sofware development where tests are written before the actual software.
* The essence of TDD is thinking test scenarios before implementation
* There are good and bad test so keep in mind why you are writing this test
* There are different opinions about the right way to do TDD

Three step process
1. Write a test that fails **( Red - Fail )**
2. Write only enough code to make it pass **( Green - Pass )**
3. Complete the implementation to meet requirements of all test cases **( Refactor )**
    - Write a clean and efficient solution

The ultimate goal of TDD is **CODE QUALITY**

## Advantages
* Tests ensure code quality
* TDD forces us to clarify our thinking before writing production code so it reduces the bias towards the requirement assumptions
* TDD improves communnication between developers
* TDD improves the stucture of our production code (makes the code small, modular and independent)
* Allows developers to make worry-free changes

## Disadvantages
* Takes more time (atleast 40% more) than traditional implementation
* Hard to convince managers
* Beware of writing bad tests

## Criteria for a Good test - RITE
* Readable - Tests should be even more readable than the code they cover
    - Whats the actual behavior?
    - Whats the expected behavior?
    - Why?
* Isolated - One test should not depend on another test
* Thorough - Tests should work for a wide variety of inputs
* Explicit - Test should contain all the necessary setups for the test to cover

## Three main types of test in TDD
* Unit Test - Testing very specific and low-level pieces of functionality
* Integration Test - Test to check these individual pieces working together (like communicating with API and database)
* E2E Test- Ensure your entire application works from the viewpoint of a user

## Purpose of Unit test
* Unit tests covers the low-level pieces of functionality, usaually functions
* Writing tests for individual functions that check whether given a specific set of inputs, that produces the correct output
* If the production code is broke without the test code then the test is not thorough enough
* TDD forces us to really put thought into our coding decisions
* Make sure smallest and granular piece of code works correctly

## Essential setup for running Unit Testing
1. A testing environment/ test runner
2. A testing library
3. An assertion library 

## Libraries for Unit Testing
* Mocha JS - contains testing runner and testing library
* Chai - contains assertion library
* Jest - contains all the three essential setups


## Writing unit test in JS (using mocha and chai)
For example, if you want to write a function about letter count of strings.
1. create a test file called letterCount.test.js
2. Write the expected input and output in test file as comments.
    ```bash
        'cat' -> {c:1,a:1,t:1}
        'better' -> {b:1,e:2,t:2,r:1}
    ```
3. Write a test stuite with one test case
    ```bash
        describe('getLetterCount - basic functionality', () => {
        it('returns an empty object when passed an empty string', () => {
            const expected = {};
            const actual = getLetterCount('');
            expect(actual).to.deep.equal(expected);
        });
   ```
4. import expect from chai and write a import statement for a function which is going to be implemented.
    ```bash
        import { expect } from 'chai';
        import getLetterCount  from './letter-count';
    ```
5. Run a test, it will fail and that is expected
6. Go to implementation file 'letterCount.js' and write a minimal code to pass the test
   ```bash
   export const getLetterCount = (str) => {} 
   ```
7. Run a test, it should pass
8. Now, write a next test case and make it fail
9. Then write a implemenation for it and make it pass
10. Repeat the process, untill you cover all the intended test cases

## Unit testing challenges

* Anagram - write the function using TDD process

## Integration Testing

* Integrations tests ensure that all the 'units' work correctly when assembled
* It requires usualy more setup than unit testing
* In TDD, integration tests guide us in the development of more complex systems
* The integration test cycle takes more than the unit test cycle

## Test Doubles

Our tests need to be fast when communicating over network for eg. database calls and api calls. So we should simulate the call using fake methods. That simulation process is called test doubles.

- Mocks and stubs are the most common test doubles

### When not to use test doubles

* Dont mock what you dont own
* Never use test doubles in unit test


## Integration Tests JS Libraries

Supertest - Allows us to test the functionality of a server by mocking the http request
Sinon - Allows us to make a stub for Database

## Code Coverge

* Code coverage is the percentage of total code being executed by tests and try to make it 100%
