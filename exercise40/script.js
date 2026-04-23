const video = document.getElementById('video');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const volume = document.getElementById('volume');
const speed = document.getElementById('speed');
const title = document.getElementById('title');
const artist = document.getElementById('artist');

let isPlaying = false;
let videoIndex = 0;

const videos = [
    {
        title: " Video 1",
        artist: "Creator One",
        src: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
        title: " Video 2",
        artist: "Creator Two",
        src: "https://www.w3schools.com/html/movie.mp4"
    }
];

function loadVideo(videoData) {
    title.textContent = videoData.title;
    artist.textContent = videoData.artist;
    video.src = videoData.src;
}

loadVideo(videos[videoIndex]);

function playVideo() {
    video.play();
    playBtn.innerHTML = '<i class="fas fa-pause"></i>';
    isPlaying = true;
}

function pauseVideo() {
    video.pause();
    playBtn.innerHTML = '<i class="fas fa-play"></i>';
    isPlaying = false;
}

playBtn.addEventListener('click', () => {
    isPlaying ? pauseVideo() : playVideo();
});

function nextVideo() {
    videoIndex = (videoIndex + 1) % videos.length;
    loadVideo(videos[videoIndex]);
    playVideo();
}

function prevVideo() {
    videoIndex = (videoIndex - 1 + videos.length) % videos.length;
    loadVideo(videos[videoIndex]);
    playVideo();
}

nextBtn.addEventListener('click', nextVideo);
prevBtn.addEventListener('click', prevVideo);

video.addEventListener('timeupdate', () => {
    const { duration, currentTime } = video;

    const percent = (currentTime / duration) * 100;
    progress.style.width = percent + "%";

    const formatTime = (time) => {
        const min = Math.floor(time / 60);
        let sec = Math.floor(time % 60);
        if (sec < 10) sec = "0" + sec;
        return `${min}:${sec}`;
    };

    currentTimeEl.textContent = formatTime(currentTime);
    durationEl.textContent = formatTime(duration);
});

progressContainer.addEventListener('click', (e) => {
    const width = progressContainer.clientWidth;
    const clickX = e.offsetX;
    video.currentTime = (clickX / width) * video.duration;
});

video.addEventListener('ended', nextVideo);

volume.addEventListener('input', (e) => {
    video.volume = e.target.value;
});

speed.addEventListener('change', (e) => {
    video.playbackRate = e.target.value;
});