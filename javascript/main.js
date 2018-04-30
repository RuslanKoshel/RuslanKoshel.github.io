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
	im = Number(im) + 553;
	if (im > 1) {
		im = -6083;
	}
	polosa.style.top = im +'px';
}

function sliderRight() {
	var polosa = document.getElementById('polosa');
	im = Number(im)-553;
	if (im < -6084) {
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
