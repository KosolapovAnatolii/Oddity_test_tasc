const logo = document.getElementById('changedLogo');
const button = document.getElementById('luckyButton');

let isChangedLogo = false;

button.addEventListener('click', function() {
  if (!isChangedLogo) {
    isChangedLogo = true;
    logo.src = './images/oddity.jpeg';

    return;
  }

  if (isChangedLogo) {
    isChangedLogo = false;
    logo.src = './images/google-logo.jpg';

    return;
  }
});