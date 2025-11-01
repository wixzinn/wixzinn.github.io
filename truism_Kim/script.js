// ==============================
// Video Switcher Script
// ==============================

// Array of video file paths
const videos = [
    "videos/video_01.mp4",
    "videos/video_02.mp4",
    "videos/video_03.mp4",
    "videos/video_04.mp4",
    "videos/video_05.mp4"
];

// Array to store the playback time for each video
const videoTimes = [0, 0, 0, 0, 0];

// Get HTML elements
const videoPlayer = document.getElementById("videoPlayer");
const textBox = document.getElementById("textBox");

// Track which video is currently playing
let currentVideoIndex = 0;

// Flag to track if the user has clicked at least once
let firstClickOccurred = false;

// Helper function: get a random index different from the current one
function getRandomIndex() {
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * videos.length);
    } while (newIndex === currentVideoIndex);
    return newIndex;
}

// Main toggle function (called once to attach the click event)
function toggleVideo() {
    textBox.addEventListener("click", () => {
        // Unmute on the first click
        if (!firstClickOccurred) {
            videoPlayer.muted = false;
            firstClickOccurred = true;
        }

        // Save current playback time
        videoTimes[currentVideoIndex] = videoPlayer.currentTime;

        // Pick a random new video index
        currentVideoIndex = getRandomIndex();

        // Load the new video
        videoPlayer.src = videos[currentVideoIndex];

        // When the new video metadata is loaded
        videoPlayer.addEventListener("loadedmetadata", () => {
            // Restore saved time if available
            const savedTime = videoTimes[currentVideoIndex];
            if (savedTime) {
                videoPlayer.currentTime = savedTime;
            }

            // Ensure sound is on after first click
            if (firstClickOccurred) {
                videoPlayer.muted = false;
            }

            // Play the new video
            videoPlayer.play();
        }, { once: true });
    });
}

// Run the setup
toggleVideo();

