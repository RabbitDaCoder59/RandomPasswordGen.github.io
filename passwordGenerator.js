export function generatePassword(length, strength) {
    const weakCharset = "abcdefghijklmnopqrstuvwxyz";
    const mediumCharset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const strongCharset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?";

    let charset = "";

    switch (strength) {
        case 'weak':
            charset = weakCharset;
            break;
        case 'medium':
            charset = mediumCharset;
            break;
        case 'strong':
            charset = strongCharset;
            break;
        default:
            charset = weakCharset;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    return password;
}

