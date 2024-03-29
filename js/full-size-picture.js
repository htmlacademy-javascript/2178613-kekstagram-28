import {picturesList} from './create-picture-elements.js';
import {isEscapeKey} from './utils.js';
import {createCommentElement} from './create-comment-elements.js';
import {createComment} from './generate-comment.js';

import {loadMoreComments} from './load-more-comments-full-size-picture.js';

const body = document.querySelector('body');
// блок просмотра фотографий в полном размере
const fullSizePicture = document.querySelector('.big-picture');
// кнопка закрытия просмотра фотографии в полном размере
const bigPictureCansel = fullSizePicture.querySelector('.big-picture__cancel');
// фотография в полном размере
const fullSizePictureImg = fullSizePicture.querySelector('.big-picture__img img');
// количество лайков фотографии в полном размере
const likesCountFullSizePicture = fullSizePicture.querySelector('.likes-count');
// количество комментариев фотографии в полном размере
const commentsCountFullSizePicture = fullSizePicture.querySelector('.comments-count');
// описание фотографии в полном размере
const descriptionFullSizePicture = fullSizePicture.querySelector('.social__caption');
// блок счетчика комментариев фотографии в полном размере
const commentsCounterFullSizePicture = fullSizePicture.querySelector('.social__comment-count');
// блок загрузки новых комментариев фотографии в полном размере
const commentsLoaderFullSizePicture = fullSizePicture.querySelector('.comments-loader');
// список комментариев
const socialComments = document.querySelector('.social__comments');
// функция закрытия полного размера фотографии

const userOpenFullSizePicture = function () {

  picturesList.addEventListener('click', (evt) => {
    if (evt.target.closest('.picture__img')) {


      const commentsQuantity = evt.target.closest('.picture').querySelector('.picture__comments').textContent;
      fullSizePictureImg.src = evt.target.src;
      likesCountFullSizePicture.textContent = evt.target.closest('.picture').querySelector('.picture__likes').textContent;
      commentsCountFullSizePicture.textContent = evt.target.closest('.picture').querySelector('.picture__comments').textContent;

      descriptionFullSizePicture.textContent = evt.target.alt;
      body.classList.add('modal-open');
      const createComments = Array.from({length: evt.target.closest('.picture').querySelector('.picture__comments').textContent}, createComment);
      const newComments = createCommentElement(createComments);
      socialComments.innerHTML = '';

      for (let i = newComments.children.length - 1; i >= 0; i--) {
        if (socialComments.children.length < 5) {
          socialComments.append(newComments.children[i]);
        }
      }

      const loadComments = function () {
        loadMoreComments(newComments, socialComments, commentsQuantity);
      };

      const closeFullSizePicture = function (onKeyDown, closeEvent) {
        fullSizePicture.classList.add('hidden');
        document.removeEventListener('keydown', onKeyDown);
        bigPictureCansel.removeEventListener('click', closeEvent);
        socialComments.innerHTML = '';
        commentsLoaderFullSizePicture.removeEventListener('click', loadComments);
      };

      // функция открытия полного размера фотографии
      const openFullSizePicture = function (onKeyDown, closeEvent) {
        fullSizePicture.classList.remove('hidden');
        document.addEventListener('keydown', onKeyDown);
        bigPictureCansel.addEventListener('click', closeEvent);
        commentsLoaderFullSizePicture.addEventListener('click', loadComments);
      };

      // функция нажатия клавиши Escape для закрытия полного размера фотографии
      const onDocumentKeydown = function () {
        if (isEscapeKey) {
          closeFullSizePicture();
        }
      };

      openFullSizePicture(onDocumentKeydown, closeFullSizePicture, loadComments);

      commentsCounterFullSizePicture.textContent = `${socialComments.children.length} из ${evt.target.closest('.picture').querySelector('.picture__comments').textContent}`;

    }
  });
};


export {userOpenFullSizePicture, fullSizePicture, commentsCounterFullSizePicture, commentsLoaderFullSizePicture};
