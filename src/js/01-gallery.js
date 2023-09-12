// Add imports above this line
import { galleryItems } from './gallery-items';
// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

const images = document.querySelector('.gallery')

// Creating gallery
const gallery = ({ preview, original, description}) => `<li class = 'gallery__item'><a class = 'gallery__link' href = '${original}'><img class = 'gallery__image' src = '${preview}' alt = '${description}' /></a></li>`
const markup = galleryItems.map(gallery).join('')
images.insertAdjacentHTML('beforeend', markup)

//SimpleLightBox

var lightbox = new SimpleLightbox('.gallery a', {
    'captionsData': 'alt',
    'captionDelay': 250,
});
