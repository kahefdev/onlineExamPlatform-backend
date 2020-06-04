const validator = require('validator').default;

exports.validateInput = (req, res, next) => {
  let { email, question, grade, remark } = req.body;
  console.log(email, question, grade, remark);
  if (email && validator.isEmail(email) && question && grade && remark)
    return true;
  else false;
};

exports.invalidUrl = (req, res, next) => {
  res.status(404).json({
    status: 'fail',
    message: `URL -  ${req.originalUrl} does not exist `,
  });
  next();
};
