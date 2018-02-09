const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: 'c41bab08214808',
    pass: '04992d4af4bdcf',
  },
});

module.exports = transport;
