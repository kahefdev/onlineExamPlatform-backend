const { validateInput } = require('../utils/customFunctions.js');
const nodemailer = require('nodemailer');
exports.getScore = (req, res, next) => {
  res.status(200).json({
    status: 'success',
    message: 'get scores route invoked',
  });
};

exports.sendScore = async (req, res, next) => {
  let { email, question, grade, remark } = req.body;
  if (validateInput(req, res, next)) {
    try {
      let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: `${process.env.EMAIL}`,
          pass: `${process.env.PASSWORD}`,
        },
      });
      let info = {
        from: '"Faculty"<email>', // sender address
        to: `"${email}"`, // list of receivers
        subject: `${question}`, // Subject line
        // text: 'Hello world?', // plain text body
        html: `<b>Question : ${question}</b><br><b>Grade : ${grade}</b><br> <b>Remark : ${remark}</b><br>  `, // html body
      };

      let emailSent = await transporter.sendMail(info);
      console.log(emailSent);
    } catch (e) {
      console.log('💥', e, '💥');
    }

    res.status(200).json({
      status: 'success',
      message: 'send scores route invoked',
      data: req.body,
    });
  } else {
    res.status(400).json({
      status: 'fail',
      message: 'Bad request - Invalid input detected',
    });
  }
};
