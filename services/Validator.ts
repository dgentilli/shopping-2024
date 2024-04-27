const isEmpty = (input: string) => {
  const trimmedInput = input.trim();

  if (!trimmedInput || trimmedInput.length === 0) return true;
  return false;
};

const isEmail = (input: string) => {
  if (isEmpty(input)) return false;

  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;

  return emailRegex.test(input.trim());
};

export const isMinLength = (input: string, minLength = 12) => {
  return input.trim().length >= minLength;
};

export const exceedsMaxLength = (input: string, maxLength = 30) => {
  return input.trim().length > maxLength;
};

const validateEmailAddress = (input: string) => {
  if (!isEmail(input)) return 'Please enter a valid email address';
  return '';
};

const validatePassword = (input: string) => {
  if (isEmpty(input)) return 'Password is required';
  if (!isMinLength(input)) return 'Password must be at least 12 characters';
  if (exceedsMaxLength(input))
    return 'Password can be no longer than 30 characters';

  const passwordRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+-=\[\]{};':",<.>/?\\]).{12,30}$/;

  if (!passwordRegex.test(input))
    return 'Password must use 3 of the 4 character types';

  return '';
};

const Validator = { validateEmailAddress, validatePassword, isEmpty };

export default Validator;
