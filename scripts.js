document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();
  document.querySelector('div[role="alert"]').style.display = 'block';
});