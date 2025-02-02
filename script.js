
const video = document.getElementById('video-player');
const toggle = document.querySelector('.toggle');
const volumn_btn = document.querySelector('input[name=volume]');
const playbackRate = document.querySelector('input[name=playbackRate]');
const rewind_btn = document.querySelector('.rewind');
const forward_btn = document.querySelector('.forward');

// console.log(volumn_btn);

let isVideoPlaying = false;
toggle.onclick = () => {
	if(isVideoPlaying) {
		video.pause();
	} else {
		video.play();
	}
	isVideoPlaying = !isVideoPlaying;
	toggle.innerText = isVideoPlaying ? "❚ ❚" : "►";
}

volumn_btn.onchange = (e) => {
	const val = e.target.value;
	video.volume = val;
}

playbackRate.onchange = (e) => {
	const rate = e.target.value;
	video.playbackRate = rate;
}

rewind_btn.onclick = () => {
	video.currentTime -= 10;
}

forward_btn.onclick = () => {
	video.currentTime += 25;
}


