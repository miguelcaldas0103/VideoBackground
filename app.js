const video = document.querySelector('#video');
const toggleButton = document.querySelector('.toggle-btn');

function handlePlayButton() {
    if (video.paused) {
        video.play();
        toggleButton.textContent = "Pause Video";
    } else {
        video.pause();
        toggleButton.textContent = "Play Video";
    }
}

// Add event listener to the toggle button
toggleButton.addEventListener("click", handlePlayButton);