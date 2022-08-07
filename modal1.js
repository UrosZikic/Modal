const modal = document.querySelector('#div-1');
const overlay = document.querySelector('.overlay');
const openBtn1 = document.querySelector('#first');
const xBtn = document.querySelector('.x-button');
// just creating some gap
const openBtn2 = document.querySelector('#second');
const modal2 = document.querySelector('#div-2');
//just creating some gap
const openBtn3 = document.querySelector('#third');
const modal3 = document.querySelector('#div-3');
// const openModal = function () {
//   modal.classList.remove('hidden');
//   overlay.classList.remove('hidden');
// };
function func1() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

const openModal2 = function () {
  modal2.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

function func2() {
  modal3.classList.remove('hidden');
  overlay.classList.remove('hidden');
}
// const closeModal = function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// };
function myFunction() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
  modal2.classList.add('hidden');
  overlay.classList.add('hidden');
  modal3.classList.add('hidden');
  overlay.classList.add('hidden');
}

openBtn1.addEventListener('click', func1());
overlay.addEventListener('click', myFunction());
xBtn.addEventListener('click', myFunction());
openBtn2.addEventListener('click', openModal2);
openBtn3.addEventListener('click', func2());
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    myFunction();
  }
});
