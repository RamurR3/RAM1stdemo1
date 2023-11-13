const form = document.getElementById('signup-form');
const imageSlider = document.getElementById('image-slider');
const images = imageSlider.getElementsByTagName('img');
let currentIndex = 0;

// Form validation
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name.trim() === '' || email.trim() === '') {
        alert('Please fill in all fields.');
    } else {
        alert(`Thank you, ${name}! You're now subscribed with email: ${email}`);
        form.reset();
    }
});

// Image slider
function showImage(index) {
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = 'none';
    }
    images[index].style.display = 'block';
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function previousImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

showImage(currentIndex);
setInterval(nextImage, 3000);
