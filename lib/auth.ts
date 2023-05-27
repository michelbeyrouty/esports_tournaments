import bcrypt from "bcrypt";

export function hashPassword(password: string) {
    return bcrypt.hash(password, 10)
}

export function comparePasswords(password: string, hashedPassword: string) {
    return bcrypt.compare(password, hashedPassword);
}

