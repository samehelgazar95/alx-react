const $ = require('jquery');
const _ = require('lodash');
import '../css/main.css';

$('body').append('<div id="logo"></div>');
$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append("<p id='count'></p>");
$('body').append('<p>Copyright - Holberton School</p>');

let counter = 0;
function updateCounter() {
  counter++;
  $('#count').text(`${counter} clicks on the button`);
}

$('button').on('click', _.debounce(updateCounter, 150));
