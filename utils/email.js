const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
  // 1.) Create a transporter
  const transporter = nodemailer.createTransport({
    host: 'sandbox.smtp.mailtrap.io',
    port: '465',
    auth: {
      user: '3c69292c75de6c',
      pass: '9618796fef4036',
    },
  });
  // 2.) Define email options
  const mailOptions = {
    from: 'Samuel Bonghanoy <samadmin69@gmail.com>',
    to: options.email,
    subject: options.subject,
    text: options.message,
  };
  // 3.) Send Email
  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
