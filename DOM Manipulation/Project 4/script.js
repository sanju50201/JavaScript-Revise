'use strict';

const modal = document.querySelector('.modal');

const body = document.querySelector('body');
const overlay = document.querySelector('.overlay');

const btnCloseModal = document.querySelector('.close-modal');

// the querySelectorAll works well if you want to target the elements
// with same classes (names)
const btnShowModal = document.querySelectorAll('.show-modal');

// function to open the modal
const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// function to close the modal
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// eventListeners working here
for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
