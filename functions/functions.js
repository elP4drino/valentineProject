const yesBtn = document.querySelector('#yesBtn');
const modal = document.getElementById('myModal');

yesBtn.addEventListener('click', function () {
    modal.style.display = 'block';
  
  });
  
  

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})

// Close the modal function
function closeModal() {
    modal.style.display = 'none';
}
