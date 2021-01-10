'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closemodal = document.querySelector('.close-modal');
const showmodel = document.querySelectorAll('.show-modal');

const openmodel = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < showmodel.length; i++) {
  showmodel[i].addEventListener('click', openmodel);
}
closemodal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
