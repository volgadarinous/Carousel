//var fs = require('fs');
//var files = fs.readdirSync('/Pantoscope');
var m = []
const testFolder = './Pantoscope/';
// const fs = require('fs');



$(document).ready(function(){  
//  $.get("./Pantoscope/", function(data) {
// 	 m.push(data)
//  })
var url = window.location.href;     // Returns full URL
console.log(url)
	
//m = ['la.jpg','chicago.jpg']
m= ['Figure1-1.png','Figure2-1.png','Figure3-1.png']
	
//   fs.readdir(testFolder).forEach(file => {
//      m.push(file)
//      console.log(file);
//    })

  for(var i=0 ; i<m.length ; i++) {
    $('<div class="item"><img src="./Pantoscope/'+m[i]+'"><div class="carousel-caption"></div>   </div>').appendTo('.carousel-inner');
    $('<li data-target="#carousel-example-generic" data-slide-to="'+i+'"></li>').appendTo('.carousel-indicators')

  }
  $('.item').first().addClass('active');
  $('.carousel-indicators > li').first().addClass('active');
  $('#myCarousel').carousel();
});
