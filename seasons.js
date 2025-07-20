document.addEventListener('DOMContentLoaded', function() {
    const videos = document.querySelectorAll('video');

    videos.forEach(video => {
        video.setAttribute('loading', 'lazy');
        video.setAttribute('preload', 'none');
    });

    const cards = document.querySelectorAll('.episode-card');
    cards.forEach(card => {
        card.addEventListener('click', function() {
            const video = this.querySelector('video');
            

            videos.forEach(v => {
                if (v !== video) v.pause();
            });
            

            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
            if (video.played) {
                video.pause();
            }
        });
    });
});

function goHome() {
    window.location.href = "index.html";
}

function goSsn1() {
    window.location.href = "season1.html";
}

function goSsn2() {
    window.location.href = "season2.html";
}

function goSsn3() {
    window.location.href = "season3.html";
}