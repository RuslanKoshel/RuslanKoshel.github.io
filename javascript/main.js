// document.getElementById('home').onclick = home;
// function home() {
// 	//var home = document.getElementById('home');
// 	//var home = document.getElementsByTagName('a');
// 	 //var tableElem = document.getElementById('home');
//  	 var elements = document.getElementsByTagName('a')[0];
//  	 //var elem = elements.getElementsByTagName('color');

//  	  console.log(elements);
 	
	
// 	style = elements.style;
// 	style.color = "red";
// 	style.backgroundColor = "red";
//     // var about = document.getElementById('about');
//     // style = about.style;
//     // style.color = "##212121";
//     // var contact = document.getElementById('contact');
//     // style = contact.style;
//     // style.color = "##212121";
// }
// document.getElementById('about').onclick = about;
// function about() {
// 	var about = document.getElementById('about');
// 	style = about.style;
// 	style.color = "#10c9c3";
//     var home = document.getElementById('home');
//     style = home.style;
//     style.color = "##212121";
//     var contact = document.getElementById('contact');
//     style = contact.style;
//     style.color = "##212121";
// }
// document.getElementById('contact').onclick = contact;
// function contact() {
// 	var contact = document.getElementById('contact');
// 	style = contact.style;
// 	style.color = "#10c9c3";
//     var home = document.getElementById('home');
//     style = home.style;
//     style.color = "##212121";
//     var about = document.getElementById('about');
//     style = about.style;
//     style.color = "##212121";
// }
var im = 0;
var modal =document.querySelector('.modal');
document.getElementById('galleryImg').onclick = galleryImg;
function galleryImg() {
	document.querySelector('#galleryImg').addEventListener('click',function(e){
	im = e.target.id;
	var polosa = document.getElementById('polosa');
	polosa.style.top = im +'px';
	modal.style.display = 'flex';
	
})

}

document.getElementById('sliderLeft').onclick = sliderLeft;
document.getElementById('sliderRight').onclick = sliderRight;

function sliderLeft() {
	
	var polosa = document.getElementById('polosa');
	im = Number(im) + 552.4555;
	if (im > 1) {
		im = -6080;
	}
	polosa.style.top = im +'px';
}
function sliderRight() {
	
	var polosa = document.getElementById('polosa');
	im = Number(im)-552.455;
	if (im < -6082) {
		im = 0;
	}
	polosa.style.top = im+'px';
}	


document.getElementById('close').onclick = close;
function close() {
	var close = document.querySelector('.pe-7s-close');
	modal.style.display = 'none';
}

window.addEventListener('click',function(e){
	if (e.target == modal){
		modal.style.display = 'none';
	} 
})

// var top1 = 0;

// document.getElementById('sliderLeft').onclick = sliderLeft;
// document.getElementById('sliderRight').onclick = sliderRight;

// function sliderLeft() {
	
// 	var polosa = document.getElementById('polosa');
// 	top1 = top1+552.4545;
// 	if (top1> 0) {
// 		top1 = -6077;
// 	}
// 	polosa.style.top = top1 +'px';

// }
// function sliderRight() {
	
// 	var polosa = document.getElementById('polosa');
// 	top1 = top1-552.4545;
// 	if (top1< -6077) {
// 		top1 = 0;
// 	}
// 	polosa.style.top = top1+'px';
// }

// document.querySelector('#galleryImg').addEventListener('click',function(e){
// 	var im = e.target.id;
// 	alert(im);
// })