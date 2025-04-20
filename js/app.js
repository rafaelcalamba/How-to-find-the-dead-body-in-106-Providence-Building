const dir = 'media/';
const ext = '.webp';

for (let i = 13; i < 24; i++) {
    const img = new Image();
    img.src = `${dir}${i}${ext}`;
}

let i = 0;
const div = document.querySelector('div');
const body = document.querySelector('body');
const vid = document.querySelector('video');

function next() {
    div.innerHTML = '';
    document.querySelector('html').requestFullscreen();

    color = ((24 - ++i) / 24) * 255;
    body.style.backgroundColor = `rgb(${color} ${color} ${color})`;

    t = i > 14 ? 2000
        : 11 ? 1000 : 500;
    setTimeout(() => {
        if (i < 24) {
            div.innerHTML = `<img src='${dir}${i}${ext}'></img>`;
            return;
        }

        vid.style.display = 'block';
        vid.play();
        setTimeout(() => {
            body.style.color = 'white';
            body.innerHTML = 'You have to trust me';
            setTimeout(() => {
                body.innerHTML = 'You do not want to see this';
                setTimeout(() => {
                    body.style.backgroundColor = 'white';
                }, 2000);
            }, 2000);
        }, 7500);
    }, t);
}

// vid.addEventListener('ended', () => {
// });