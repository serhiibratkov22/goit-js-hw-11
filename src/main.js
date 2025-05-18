import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  showLoader,
  hideLoader,
  clearGallery,
} from './js/render-functions';

// 🔍 DOM-елементи
const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader'); // переконайся, що є елемент з класом loader

form.addEventListener('submit', async event => {
  event.preventDefault();
  const query = event.currentTarget.elements['search-text'].value.trim();

  if (!query) {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search query!',
      position: 'topRight',
    });
    return;
  }

  clearGallery(gallery);
  showLoader(loader);

  try {
    const images = await getImagesByQuery(query);

    if (images.length === 0) {
      iziToast.error({
        title: 'No Results',
        message: 'No images found. Try a different search.',
        position: 'topRight',
      });
    } else {
      createGallery(images, gallery);
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again later.',
      position: 'topRight',
    });
    console.error(error);
  } finally {
    hideLoader(loader);
  }
});
