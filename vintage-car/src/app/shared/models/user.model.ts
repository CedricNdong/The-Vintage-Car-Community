export interface User {
    uid: string;
    email: string;
    displayName: string;
    photoURL: string;
    emailVerified: boolean;
    role: UserRole;
}

export enum UserRole {
    Lagerhalter = 'Lagerhalter',
    Einlagerer = 'Einlagerer',
}

export interface SignupApplication {
    email: string;
    username: string;
    password: string;
    role: UserRole;
}