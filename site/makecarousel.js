//var fs = require('fs');
//var files = fs.readdirSync('/Pantoscope');
var m = []
var testFolder = './Pantoscope/';
// const fs = require('fs');



$(document).ready(function(){  
//  $.get("./Pantoscope/", function(data) {
// 	 m.push(data)
//  })
var url = window.location.href;     // Returns full URL
console.log(url)
var params = url.split('?');
var url = params[0]
var folder = params[1]
if(folder){
	testFolder = '/'+folder+'/'
	console.log('param is:'+testFolder)
}

	
//m = ['la.jpg','chicago.jpg']
m= ['Figure1-1.png','Figure2-1.png','Figure3-1.png']
	
//   fs.readdir(testFolder).forEach(file => {
//      m.push(file)
//      console.log(file);
//    })

  for(var i=0 ; i<m.length ; i++) {
  var filename = url.slice(0,-10)+testFolder+m[i]
  console.log('filename is:'+filename)
    $('<div class="item"><img src='+filename+'><div class="carousel-caption"></div>   </div>').appendTo('.carousel-inner');
    $('<li data-target="#carousel-example-generic" data-slide-to="'+i+'"></li>').appendTo('.carousel-indicators')

  }
  $('.item').first().addClass('active');
  $('.carousel-indicators > li').first().addClass('active');
  $('#myCarousel').carousel();
});
