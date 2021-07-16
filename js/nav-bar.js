const menu = document.querySelector('.menu');
const btnON = document.querySelector('.menu-icon');
const btnOFF = document.querySelector('.menu-icon i');

/* other */
const overlay = document.querySelector('.overlay');
const logo = document.querySelector('.name-logo');
const navbar = document.querySelector('.nav-bar');

btnON.addEventListener('click' , () => {
	menu.classList.toggle('active');
	
	/* other */
	overlay.classList.toggle('active');
	btnON.classList.toggle('active');
	logo.classList.toggle('active');
	navbar.classList.toggle('active');

if(menu.classList.contains('active')){
	btnOFF.setAttribute('class','fas fa-times');
}else{
	btnOFF.setAttribute('class','fas fa-angle-double-down')
}
});

/* More text landing 1 */

const text = document.querySelector('.more-info');
const btnt = document.querySelector('.more-icon');
const btntOFF = document.querySelector('.more-icon i');

btnt.addEventListener('click' , () => {
	text.classList.toggle('active');

if(text.classList.contains('active')){
	btntOFF.setAttribute('class','fas fa-times');
}else{
	btntOFF.setAttribute('class','fas fa-plus')
}
});
