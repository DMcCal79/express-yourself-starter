const path = require('path');

//npm
const express = require('express');
const ejs = require('ejs');

//initialize
const app = express();

//set views directory
app.use(express.static('css'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//route that renders the index view
app.get('/', function(req, res, next) {
  res.render('index.ejs', { avatar: 'https://avatars3.githubusercontent.com/u/18731709?v=3&s=466', description: 'Hello, my name is Dave McCalmont and I am a Web Developer in Austin, TX.',
  skills: ['HTML', 'CSS', 'Javascript', 'JQuery', 'Bootstrap', 'Node.js/Express.js'],
  hobbies: ['Watching Baseball', 'Eating BBQ', 'Video Games', 'Traveling', 'Going to Movies']
 })
});

const port = 3000;
app.listen(port, () => console.log(`Server listening on: ${port}`));
