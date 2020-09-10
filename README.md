# tddIntro
This project contains the necessary code to understand the Test driven development

## Introduction

Three step process
1. Write a test that fails (Red - Fail)
2. Write only enough code to make it pass (Green - Pass)
3. Complete the implementation to meet requirements of all the test (Refactor)

## Advantages
1. The essence of TDD is thinking test scenarios before implementation.
2. Can expose poorly designed monolithic code
3. TDD reduces the bias towards the requirement assumptions
4. Ability to bypass or mock dependencies of functions
5. Code coverage is the percentage of total code being executed by tests and try to make it 100%

## Writing unit test in Java (using Junit)
1. Create a class skeleteon
2. Create a test class for that
3. Write a test function based on the requirement and create a equivalent function in the implementation class
4.  For Example: Suppose if you want to get the user based on id, you can write a test function like getNullUserWhenIdIsNotFound in the test class and write a findByID class in implmentation.
5. Now make the test fail
6. Then change the implementation to make minimal pass
7. Finally, refactor the code for the actual implementation and redo the step 5 to 7, until you pass all the  test cases. 

