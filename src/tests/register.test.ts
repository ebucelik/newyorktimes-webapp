import { validateEmail } from '../register';

describe('testing register file', () => {
    test('E-Mail should be valid.', () => {
        expect(validateEmail("ebu@hot.com")).toBe(true);
    });
});

describe('testing register file', () => {
    test('E-Mail should not be valid.', () => {
        expect(validateEmail("ebu@hot")).toBe(false);
    });
});

describe('testing register file', () => {
    test('E-Mail should not be valid.', () => {
        expect(validateEmail("ebu")).toBe(false);
    });
});