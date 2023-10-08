const amount1Anually = document.getElementById('amount1__anually');
const amount1Monthly = document.getElementById('amount1__monthly');
const amount2Anually = document.getElementById('amount2__anually');
const amount2Monthly = document.getElementById('amount2__monthly');
const amount3Anually = document.getElementById('amount3__anually');
const amount3Monthly = document.getElementById('amount3__monthly');
const toggleAnuallyBtn = document.getElementById('toggle-anually');


toggleAnuallyBtn.addEventListener('click', function() {
  let beforeElement = window.getComputedStyle(this, '::before');
  let currentTransform = beforeElement.getPropertyValue('transform');

  if (currentTransform === 'matrix(1, 0, 0, 1, 0, 0)') {
    this.style.setProperty('--transform', 'translateX(1.9rem)');
    amount1Monthly.style.display = 'block';
    amount2Monthly.style.display = 'block';
    amount3Monthly.style.display = 'block';

    amount1Anually.style.display = 'none';
    amount2Anually.style.display = 'none';
    amount3Anually.style.display = 'none';

  }else {
    this.style.setProperty('--transform', 'translateX(0)');
    amount1Anually.style.display = 'block';
    amount2Anually.style.display = 'block';
    amount3Anually.style.display = 'block';

    amount1Monthly.style.display = 'none';
    amount2Monthly.style.display = 'none';
    amount3Monthly.style.display = 'none';
  }
})