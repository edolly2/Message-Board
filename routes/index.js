const express = require('express');
const router = express.Router();

const messages = [
  {
    content: 'Hi there!',
    user: 'Brian',
    date: new Date(),
  },
  {
    content: 'Hello World!',
    user: 'Eric',
    date: new Date(),
  },
];

/* GET home page. */
router.get('/', (req, res) => {
  const button = `<a href='/new'><button>New Message</button></a>`;
  res.render('index', { title: 'Mini Messageboard', messages, button });
});

router.get('/new', function (req, res, next) {
  res.render('form', { title: 'Send Message' });
});

router.post('/new', (req, res) => {
  const messageName = req.body.name;
  const messageText = req.body.message;

  messages.push({ content: messageText, user: messageName, date: new Date() });
  res.redirect('/');
});

module.exports = router;
