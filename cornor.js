function Display(){
    document.querySelector(".video").classList.toggle("video_on");
    document.querySelector(".table").classList.toggle("table_off");


}



 
 // Make click function global
window.myFunction = function() {
  alert('You have added this to cart"!');
};

// Grab the button
const button = document.getElementById('buyButton');

// Style the button
button.style.backgroundColor = 'yellow';
button.style.color = 'red';
button.style.fontSize = '28px';
button.style.fontWeight = 'bold';
button.style.padding = '25px 60px';
button.style.border = 'none';
button.style.borderRadius = '12px';
button.style.cursor = 'pointer';
button.style.boxShadow = '0 6px 18px black';
button.style.transition = 'all 0.2s ease';
button.style.fontFamily = 'Arial, sans-serif';

// Optional: hover effect
button.addEventListener('mouseover', () => {
  button.style.backgroundColor = 'black';
  button.style.transform = 'scale(1.05)';
});
button.addEventListener('mouseout', () => {
  button.style.backgroundColor = 'yellow';
  button.style.transform = 'scale(1)';
});

// Connect click to global function
button.addEventListener('click', window.myFunction);
