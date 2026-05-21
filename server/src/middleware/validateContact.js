const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const validateContact = (req, res, next) => {
  const errors = [];
  const {
    fullName,
    email,
    monthlyBudget,
    goals,
    timeline,
    services,
  } = req.body;

  if (!fullName || typeof fullName !== 'string' || fullName.trim().length < 2) {
    errors.push('Full name is required (minimum 2 characters).');
  }

  if (!email || typeof email !== 'string' || !EMAIL_REGEX.test(email.trim())) {
    errors.push('A valid email address is required.');
  }

  if (!monthlyBudget || typeof monthlyBudget !== 'string') {
    errors.push('Monthly budget selection is required.');
  }

  if (!goals || typeof goals !== 'string' || goals.trim().length < 10) {
    errors.push('Business goals are required (minimum 10 characters).');
  }

  if (!timeline || typeof timeline !== 'string') {
    errors.push('Project timeline is required.');
  }

  if (services && !Array.isArray(services)) {
    errors.push('Services must be an array.');
  }

  if (errors.length > 0) {
    return res.status(400).json({ success: false, message: 'Validation failed.', errors });
  }

  next();
};
