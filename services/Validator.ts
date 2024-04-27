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

const validateEmailAddress = (input: string) => {
  if (!isEmail(input)) return 'Please enter a valid email address';
  return '';
};

const Validator = { validateEmailAddress, isEmpty };

export default Validator;
