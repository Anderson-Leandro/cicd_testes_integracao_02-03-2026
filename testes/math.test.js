const math = require('../math');


test('soma 2 + 3 igual a 5', () => {
    expect(math.add(2, 3)).toBe(5);
});

test('soma 5 + 3 é igual a 8', () => {
    expect(math.add(5, 3)).toBe(8);
})

test('soma -10 + 3 é igual a -7', () => {
    expect(math.add(-10, 3)).toBe(-7)
})

test('soma 10 + -30 é igual a -20', () => {
    expect(math.add(10, -30)).toBe(-20)
})

// ---------------------------------------------------------------------

test('subtratir 5 - 2 é igual a 3', () => {
    expect(math.subtract(5, 2)).toBe(3)
})

test('subtratir -5 - 2 é igual a -7', () => {
    expect(math.subtract(-5, 2)).toBe(-7)
})

// ---------------------------------------------------------------------

test('multiplicar 5 * 5 é igual a 25', () => {
    expect(math.multiply(5, 5)).toBe(25)
})

test('multiplicar 5 * -2 é igual a -10', () => {
    expect(math.multiply(5, -2)).toBe(-10)
})


// ----------------------------------------------------------------------

test('dividir 10 / 2 é igual a 5', () => {
    expect(math.divide(10, 2)).toBe(5)
})

test('dividir 5 / 13 é igual a ?', () => {
    expect(math.divide(5, 13)).toBe(0.38461538461538464)
})
