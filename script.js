const video = document.querySelector(".video");
const playButton = document.querySelector(".toggle");
const rewindButton = document.querySelector(".rewind");
const fastForwardButton = document.querySelector(".fast-forward");
const progress = document.querySelector(".progress");
const progressFilled = document.querySelector(".progress__filled");
const volumeSlider = document.querySelector(".volume");
const playbackSpeedSlider = document.querySelector(".playbackSpeed");
const speedBar = document.querySelector(".speed-bar");

// Ensure the video element exists
if (!video) {
  console.error("Video element not found");
  return;
}

// Toggle Play/Pause
function togglePlay() {
  if (video.paused) {
    video.play();
    playButton.textContent = "❚ ❚";
  } else {
    video.pause();
    playButton.textContent = "►";
  }
}

// Update Progress Bar
function updateProgress() {
  if (video.duration) {
    const percent = (video.currentTime / video.duration) * 100;
    progressFilled.style.width = `${percent}%`;
  }
}

// Set Video Time on Progress Bar Click
function setVideoProgress(e) {
  if (video.duration) {
    const newTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = newTime;
  }
}

// Rewind 10 seconds
function rewind() {
  if (video.currentTime) {
    video.currentTime -= 10;
  }
}

// Fast Forward 25 seconds
function fastForward() {
  if (video.currentTime) {
    video.currentTime += 25;
  }
}

// Adjust Volume
function adjustVolume() {
  video.volume = volumeSlider.value;
}

// Adjust Playback Speed
function adjustPlaybackSpeed() {
  video.playbackRate = playbackSpeedSlider.value;
  speedBar.textContent = `${playbackSpeedSlider.value}×`; // Update speed text
}

// Event Listeners
playButton.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);
video.addEventListener("timeupdate", updateProgress);
progress.addEventListener("click", setVideoProgress);
rewindButton.addEventListener("click", rewind);
fastForwardButton.addEventListener("click", fastForward);
volumeSlider.addEventListener("input", adjustVolume);
playbackSpeedSlider.addEventListener("input", adjustPlaybackSpeed);
