const videoPart1 = [
	{ src: "videos/clip01.mp4", caption: "The light awakens." },
    { src: "videos/clip02.mp4", caption: "A quiet beginning." },
    { src: "videos/clip03.mp4", caption: "A day opens." },
    { src: "videos/clip04.mp4", caption: "Another today." }
];

const videoPart2 = [
	{ src: "videos/clip05.mp4", caption: "Time keeps moving." },
	{ src: "videos/clip06.mp4", caption: "Small moments accumulate." },
	{ src: "videos/clip07.mp4", caption: "I keep moving forward." },
	{ src: "videos/clip08.mp4", caption: "A flow that cannot stop." }
];

const videoPart3 = [
	{ src: "videos/clip09.mp4", caption: "The day closes quietly." },
	{ src: "videos/clip10.mp4", caption: "I catch my breath." },
	{ src: "videos/clip11.mp4", caption: "A quiet ending." },
	{ src: "videos/clip12.mp4", caption: "Another closing of the day." }
];

const titleOverlay = document.getElementById("titleOverlay");
const player = document.getElementById("player");
const titleText = document.getElementById("titleText"); // NEW
const replayBtn = document.getElementById("replayBtn");

function picker(array) {
const randomIndex = Math.floor(Math.random() * array.length);
console.log("Random word:", array[randomIndex]);
return array[randomIndex];
}

titleOverlay.addEventListener("click", buildVideo);
replayBtn.addEventListener("click", buildVideo);

let playlist = []; // creates an empty array
let currentIndex = 0;

function buildVideo() {
//titleOverlay.style.display = "none"; // REMOVED
	titleOverlay.classList.add("playing"); // NEW
	player.classList.add("fullscreen");
	replayBtn.style.display = "none";
	
		playlist = [
			picker(videoPart1),
			picker(videoPart2),
			picker(videoPart3)
		];
	
	currentIndex = 0;
	
	playCurrent();
}

function playCurrent() {
	const current = playlist[currentIndex]; // { src: "...", caption: "..." }
	titleText.textContent = current.caption;

	player.src = current.src;
	player.muted = true;
	player.load();
	player.play().catch(err => {
		console.warn("Play interrupted (autoplay policy?):", err);
	});
}

// Advance when a video ends
player.addEventListener("ended", () => {
	currentIndex++;
	if (currentIndex < playlist.length) {
		playCurrent();
	} else {
		console.log("All three parts finished.");		
		replayBtn.style.display = "block";
	}
});