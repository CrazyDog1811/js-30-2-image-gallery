const pictures = document.querySelectorAll('.rnd-picture');
const input = document.querySelector('input');
const btn = document.querySelector('button');
const galleryContainer = document.querySelector('.picture-grid')


async function getPhoto() {
    const value = input.value || 'winter';
    const url = `https://api.unsplash.com/search/photos?query=${value}&orientation=landscape&client_id=Egzw99AYrBwBe8wlbSwyRqpYUiMvG6BMCpe7CuiKHOU`;
    const res = await fetch(url);
    const data = await res.json();
    showPhoto(data);
}

const showPhoto = (data) => {
    galleryContainer.innerHTML = '';
    data.results.forEach((obj) => {
        const img = `<img class="rnd-picture" src="${obj.urls.regular}" alt="image">`;
        galleryContainer.insertAdjacentHTML('beforeend', img);
    })
}

btn.addEventListener('click', getPhoto);
document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        console.log(input.value);
        getPhoto();
    }
});
galleryContainer.addEventListener('click', (e) => {
    if(e.target.classList.contains('rnd-picture')) {
        let src = e.target.src;
        window.open("about:blank").document.write("<img src='" + src + "' alt='picture' />");
    }
})
document.addEventListener('DOMContentLoaded', getPhoto);