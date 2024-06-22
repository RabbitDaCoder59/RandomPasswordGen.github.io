import { generatePassword } from './passwordGenerator.js';

test('generates password of correct length', () => {
    const length = 16;
    const password = generatePassword(length, 'strong');
    expect(password.length).toBe(length);
});

test('generates password with correct character set', () => {
    const length = 100;
    const password = generatePassword(length, 'strong');
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?";
    for (let char of password) {
        expect(charset.includes(char)).toBe(true);
    }
});
