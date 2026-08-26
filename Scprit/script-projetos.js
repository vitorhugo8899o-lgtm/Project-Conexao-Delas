const track = document.getElementById('projects-track');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');

if (track && btnPrev && btnNext) {

    function getScrollAmount() {
        const slide = track.querySelector('.carousel-slide');

        if (!slide) return 0;

        const gap = parseFloat(getComputedStyle(track).gap) || 0;

        return slide.offsetWidth + gap;
    }

    btnNext.addEventListener('click', () => {
        track.scrollBy({
            left: getScrollAmount(),
            behavior: 'smooth'
        });
    });

    btnPrev.addEventListener('click', () => {
        track.scrollBy({
            left: -getScrollAmount(),
            behavior: 'smooth'
        });
    });
}