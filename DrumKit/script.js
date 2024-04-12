'use strict';
function removeTransition(e){
	// Skipping unClicked button
	if(e.propertyName !== 'transform') return;

	this.classList.remove(`playing`);
};

function playSound(e) {
	console.log(e.keyCode);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    const key = document.querySelector(`.key[data-key ="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    key.classList.add(`playing`);
    audio.play();
		const keys = document.querySelectorAll(`.key`);
		keys.forEach(key=>key.addEventListener(`transitionend`,removeTransition));
};


window.addEventListener('keydown',playSound);


function playAudio(id){
	const audio = document.getElementById(id);
	audio.currentTime =0;
	audio.play();
};
//window.addEventListener('click',playAudio);
