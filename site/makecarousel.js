//var fs = require('fs');
//var files = fs.readdirSync('/Pantoscope');
var m = []

$(document).ready(function(){  
 $.get("./Pantoscope/", function(data) {
	 m.push(data)
 })
	
//m = ['la.jpg','chicago.jpg']
  for(var i=0 ; i<m.length ; i++) {
    $('<div class="item"><img src="/Pantoscope/'+m[i]+'"><div class="carousel-caption"></div>   </div>').appendTo('.carousel-inner');
    $('<li data-target="#carousel-example-generic" data-slide-to="'+i+'"></li>').appendTo('.carousel-indicators')

  }
  $('.item').first().addClass('active');
  $('.carousel-indicators > li').first().addClass('active');
  $('#myCarousel').carousel();
});
