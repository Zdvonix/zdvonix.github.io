(function() {
    const audio = document.getElementById('hiddenAudio');
    const toggleBtn = document.getElementById('audioToggle');
    const icon = document.getElementById('audioIcon');
    const text = document.getElementById('audioText');
    const overlay = document.getElementById('enterOverlay');

    audio.volume = 0.2;

    function playAudio() {
        audio.play().then(() => {
            icon.className = 'fas fa-pause';
            text.innerText = 'pause';
        }).catch(() => {
            icon.className = 'fas fa-play';
            text.innerText = 'play';
        });
    }

    
    overlay.addEventListener('click', function() {
        overlay.style.opacity = '0';
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 1000);
        playAudio();
    });

    toggleBtn.addEventListener('click', () => {
        if (audio.paused) {
            playAudio();
        } else {
            audio.pause();
            icon.className = 'fas fa-play';
            text.innerText = 'play';
        }
    });
})();