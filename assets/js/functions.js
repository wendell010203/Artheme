$( document ).ready(function() {

smoothScroll(400);

});

function smoothScroll(duration) {
	$('a[href^="#"]').on('click' , function(event) {

		var target = $( $(this).attr('href') );

		if ( target.length ) {
			event.preventDefault();
			$('html , body').animate({
				scrollTop: target.offset().top
			}, duration);
		}
	});
}

// WORK WORK WORK WORK WORK WORK WORK WORK
// WORK WORK WORK WORK WORK WORK WORK WORK
// WORK WORK WORK WORK WORK WORK WORK WORK

let workContainer = document.querySelector(".work-container");
let workExpand = document.querySelector(".work-expand");
workContainer.addEventListener("click" , workBelt)
workExpand.addEventListener("click" , workBack)

function workBelt(x){
	let workBelt = document.querySelector(".work-belt");
	let workExpand = document.querySelector(".work-expand");
	let folder = x.target.getAttribute("data-folder");
	let workContainer = document.querySelector(".work-container");

	if(x.target.parentElement.className == "work-unit"){
		workBelt.style.marginLeft = "-100%";
		workExpand.children[1].src = "assets/img/work/" + folder + "/work.jpg";
		workExpand.style.display = "flex";
		workContainer.style.visibility = "hidden";
	}
}

function workBack(x){
	let workBelt = document.querySelector(".work-belt");
	let workExpand = document.querySelector(".work-expand");
	let workContainer = document.querySelector(".work-container");

	if(x.target.className == "work-shrink"){
		workBelt.style.marginLeft = "0%";
		workExpand.style.display = "none";
		workContainer.style.visibility = "visible";
	}
}

// CLIENTS CLIENTS CLIENTS CLIENTS CLIENTS CLIENTS
// CLIENTS CLIENTS CLIENTS CLIENTS CLIENTS CLIENTS
// CLIENTS CLIENTS CLIENTS CLIENTS CLIENTS CLIENTS

let prev = document.querySelector(".clients-prev");
let next = document.querySelector(".clients-next");
let clientsUnit = document.querySelectorAll(".clients-unit");
let logo = document.querySelectorAll(".clients-logo");
let count = 0;

startClient();
prev.addEventListener("click" , clickPrev);
next.addEventListener("click" , clickNext);

function reset(){
	for(let i = 0; i < clientsUnit.length; i++){
		clientsUnit[i].style.display = "none";
		logo[i].style.boxShadow = "0px 0px 0px";
		logo[i].style.opacity = ".4";
	}
}

function startClient(){
	reset();
	clientsUnit[0].style.display = "flex";
	logo[0].style.boxShadow = "0px 4px 0px #FF4136";
	logo[0].style.opacity = "1";
}

function clickPrev(){
	reset();

	if(count == 0){
		count = clientsUnit.length - 1;
	}else{
		count--
	}

	clientsUnit[count].style.display = "flex";
	logo[count].style.boxShadow = "0px 4px 0px #FF4136";
	logo[count].style.opacity = "1";
}

function clickNext(){
	reset();

	if(count == clientsUnit.length - 1){
		count = 0;
	}else{
		count++
	}

	clientsUnit[count].style.display = "flex";
	logo[count].style.boxShadow = "0px 4px 0px #FF4136";
	logo[count].style.opacity = "1";
}

let logoContainer = document.querySelector(".clients-logoContainer");

logoContainer.addEventListener("click" , logoClick);

function logoClick(x){
	if(x.target.className == "clients-logo"){
		for(let i = 0; i < logo.length; i++){
			if(x.target == x.target.parentElement.children[i]){
				reset();

				count = i;

				clientsUnit[count].style.display = "flex";
				logo[count].style.boxShadow = "0px 4px 0px #FF4136";
				logo[count].style.opacity = "1";
			}
		}	
	}
}








































