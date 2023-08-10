const sinon = require("sinon");
// import assert from 'node:assert/strict';

const robot = {
  greet(name) {
    // Unit being tested
    return "Hello " + name;
  },
};

test("greet should return hello codey", () => {
  sinon.spy(robot, "greet"); // Initialize the spy
  robot.greet("codey"); // Call the method
  expect(robot.greet.called).toBe(true); //
  // assert.ok(robot.greet.called, true)
  expect(robot.greet.calledWith("codey")).toBe(true);
  // assert.ok(robot.greet.calledWith('codey'), true)

  expect(robot.greet.returned("Hello codey")).toBe(true);
  // assert.ok(robot.greet.returned('Hello codey'), true)
  robot.greet.restore(); // Remove spy from wrapped method
});
