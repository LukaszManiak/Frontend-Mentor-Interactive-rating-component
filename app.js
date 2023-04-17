'use strict';

//elements

const ratingList = document.querySelector('.rating-list');
const submitBtn = document.querySelector('.submit-btn');
const finalRating = document.querySelector('.final-rating');
const allRatings = document.querySelectorAll('.rating');
const firstBox = document.querySelector('.first-box');
const secondBox = document.querySelector('.second-box');
let rate;
let userChoice;
ratingList.addEventListener('click', function (e) {
  userChoice = e.target;
  if (!(userChoice.className === 'rating')) return;
  rate = userChoice.dataset.rate;

  allRatings.forEach(r => r.classList.remove('rating--active'));
  userChoice.classList.add('rating--active');
});

submitBtn.addEventListener('click', function () {
  finalRating.textContent = `You selected ${rate} out of 5`;

  firstBox.classList.add('remove-box');
  secondBox.classList.add('show-box');
});
