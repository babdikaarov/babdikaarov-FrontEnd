# Setup, Exercise, and Verify

This distinct and well-defined separation of steps makes your test more reliable, maintainable, and expressive.

The phases are defined as follows:

Setup - create objects, variables, and set conditions that your test depends on

Exercise - execute the functionality you are testing

Verify - check your expectations against the result of the exercise phase. You can use the assert library here

## Teardown

Running multiple tests can introduce issues if the tests make changes to the testing environment: changes to the environment in one test might affect the next test. Some common changes to an environment include:

- altering files and directory structure
- changing read and write permissions on a file
- editing records in a database

To address this issue, we often add a teardown step to the end of our tests. The teardown phase makes our tests isolated by resetting the environment before the next test runs. This provides two key benefits:

- Changes to the environment caused by one test do not affect the other tests.
- Isolated tests can be executed in any order!

## Hooks


While execution and verification are unique to each test, setup and teardown are often similar or even identical for multiple tests within a test suite. The Mocha test framework provides functions that enable us to reduce repetition, simplify the scope of each test, and more finely control the execution of our tests.

These functions (also referred to as hooks) are:

- beforeEach(callback) - callback is run before each test
- afterEach(callback) - callback is run after each test
- before(callback) - callback is run before the first test
- after(callback) - callback is run after the last test

Each hook accepts a callback to be executed at various times during a test. The before... hooks naturally happen before tests and are useful for separating out the setup steps of your tests. Meanwhile, the after... hooks are executed after tests and are useful for separating out the teardown steps of your tests.


## Characteristics of a good Test

Learn characteristics of a good test
Share
A test suite is a collection of tests that you can run against a piece of software. The goal is for these tests to catch any errors in your software before you make it available to the end user.

A good test suite is one that doesn’t take long to run, and if all the tests are passing, provides you with confidence that your software is working as expected. If a good test suite catches a bug, it will return feedback that can help you identify the source of the issue, and help you resolve it.

A bad test suite may take a long time to run and/or, if passing, won’t provide you with confidence that your software is working as expected. If a bad test suite catches a bug, it may not return helpful feedback or be a false negative, which will make it challenging to identify the source of the issue.

In this article, you will learn about six characteristics of a good test suite, originally enumerated by Josh Steiner and Joël Quenneville Testing Rails. If you keep these characteristics in mind as you write tests, you improve the chances that your test suite will run efficiently and it provides you with confidence that your software is working as expected.

- Fast
- Complete
- Reliable
- Isolated
- Maintainable
- Expressive

### Characteristics of an Effective Test Suite

#### Fast

As you learn more about tests in the context of full-stack web applications, you will find that some types of tests, called unit tests, are fast, while other tests, called integration tests, are slower. If your test suite contains a large collection of integration tests, and few unit tests, you may end up waiting a few minutes or even hours for your test suite to execute.

A fast test suite will provide feedback more quickly, and thus, make the development process more efficient than a slow test suite. Often, a developer who is trying to fix a bug will need to run the test suite multiple times to see if their implementation addresses the issue. If they work on the bug for two hours, and need to run the test suite five times, a test suite that takes thirty seconds to run will save 22 minutes over a test suite that takes five minutes to run — the difference can be this significant.

#### Complete

A test suite that covers 100% of your codebase will catch any errors that arise from changing or adding code application. A complete test suite provides you with confidence that your software is working as expected. This characteristic can often run in conflict with building a fast test suite — as you investigate testing further, you will learn about strategies that help you optimize your test suite for speed and completeness.

#### Reliable

A reliable test suite is one that provides consistent feedback, regardless of changes that may occur outside the scope of a given test. An unreliable test suite may have tests that fail intermittently, with no helpful feedback about changes you’ve made to your application.

If a developer is trying to address a bug in their codebase, they will need to run their test suite a few times to see if they’ve addressed the issue. What if they run the test suite two times in-a-row and don’t change their implementation, but receive different sets of failing tests? This is a sign that the developer’s test suite is unreliable. It’s like trying to hit a moving target — they can’t trust if their implementation is wrong or if their test suite is unreliable.

#### Isolated

An isolated test suite contains tests that run without impacting other tests in the suite. This may require you to cleanup persisting data after you run a test in your suite.

For example, you may want to test whether your software properly writes to a database. You don’t want any changes to the database persisting outside of this test. If a change to the database does persist, it may cause unexpected behavior in a test that reads from the database.

#### Maintainable

A maintainable test suite is easy to manipulate — you should be able to add, change, or remove tests with ease. If you don’t know how to add tests to run against new features, your test suite may become incomplete and ineffective.

The best way to keep your test suite maintainable is to be organized, follow coding best practices, and develop a consistent process that works for you and your team.

#### Expressive

The easy-to-read nature of test suites make them a great form of documentation. You should always write code that is descriptive of the features you are testing.

You should try to build a test suite that is descriptive enough for another developer to read, and be able to fully understand the purpose of the web application. Also, because your test suite is part of your software, it is more likely to stay up-to-date than a README or documentation that isn’t a functional piece of the software.

#### Conclusion

In this article, we covered six characteristics of a good test suite. Use these characteristics as you begin to build your own test suites, and as you evaluate the utility of strategies to approach test suite development.

Keep these top-of-mind as you begin building and evaluating your own test suites. The MC-FIRE acronym (Maintainable, Complete, Fast, Isolated, Reliable, and Expressive) may be a helpful acronym to remember these characteristics as you work!
