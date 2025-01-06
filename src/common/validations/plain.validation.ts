import validator from 'validator';

export const isValidIban = (iban: string): boolean => validator.isIBAN(iban);

export const isPositiveNumbre = (ammount: number): boolean => ammount > 0;

export const isDateAfterToday = (date: Date): boolean => date > new Date();

export const isEmailWellFormed = (email: string): boolean => validator.isEmail(email);

export const isStringValidInformed = (field: string): boolean => field !== '';

export const isValueNotNullOrUndefined = <T>(value: T): boolean => value != undefined && value != null;