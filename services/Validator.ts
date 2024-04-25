import emailMisspelled, { top100 } from 'email-misspelled';

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

const checkEmailSpelling = (input: string) => {
  const emailChecker = emailMisspelled({ domains: top100 });
  const test123 = emailChecker(input);
  console.log('*******');
  console.log('emailChecker:', test123);
};

const validateEmailAddress = (input: string) => {
  if (!isEmail(input)) return 'Please enter a valid email address';
  checkEmailSpelling(input);
};

const Validator = { validateEmailAddress };

export default Validator;
