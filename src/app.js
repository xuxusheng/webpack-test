import 'babel-polyfill'
import cats from './cats'
import $ from 'jquery'

$(function() {
  $('<h1>Cats</h1>').appendTo('body');

  const ul = $('<ul></ul>').appendTo('body');

  for(const cat of cats) {
    $('<li></li>').text(cat).appendTo(ul);
  }
})


