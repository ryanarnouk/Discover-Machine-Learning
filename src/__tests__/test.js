function sum(a, b) {
  return a + b;
}

const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

// FIGURE OUT HOW TO ADD ALL THE TESTS