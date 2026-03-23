const flames = document.querySelectorAll('.flame');
const button = document.getElementById('blowBtn');

button.addEventListener('click', () => {
  flames.forEach(flame => {
    flame.style.display = 'none';
  });
  alert("Happy Birthday! shahriar, im sorry im not the best at coding should've paid attention to my ict coding classes i love you tho -luv raisa");
});