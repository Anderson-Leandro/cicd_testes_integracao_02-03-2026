const math = require('../math');



test('soma 2 + 3 igual a 5', () => {
    expect(math.add(2, 3)).toBe(5);
});

test('soma 5 + 3 é igual a 8', () => {
    expect(math.add(5, 3)).toBe(8);
})