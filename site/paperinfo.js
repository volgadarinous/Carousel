$(document).ready(function(){ 

	var url = window.location.href;     // Returns full URL
	console.log(url)
	var params = url.split('?');
	var url = params[0]
	var folder = params[1]
	if(folder){
		testFolder = '/'+folder+'/'
		console.log('param is:'+testFolder)
	}

	console.log('This script runs!')

	$('#abstract').text("Helloooo")
	$('#abstract').text("Helloooo2")
	
	
// 	$('#abstract').innerHTML = "Helloooo"

	// for(var i=0 ; i<m.length ; i++) {
 //  		var filename = url.slice(0,-10)+testFolder+m[i]
 //  		console.log('filename is:'+filename)
	// 	$('<div class="item"><img src="'+filename+'"><div class="carousel-caption"></div>   </div>').appendTo('.carousel-inner');
	// 	$('<li data-target="#carousel-example-generic" data-slide-to="'+i+'"></li>').appendTo('.carousel-indicators')
	
// 	var img = new Image();
// 	img.src = filename;

// 	img.onerror = function(){ // Failed to load
// 		console.log('could not loadd:'+filename)
// 	};
// 	img.onload = function(){ // Loaded successfully
// 		console.log('displaying:'+filename)
// 	  	$('<div class="item"><img src="'+filename+'"><div class="carousel-caption"></div>   </div>').appendTo('.carousel-inner');
//     		$('<li data-target="#carousel-example-generic" data-slide-to="'+i+'"></li>').appendTo('.carousel-indicators')

// 	};
    
//   	}
});
