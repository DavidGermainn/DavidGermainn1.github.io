var i = 0;
var y = 0;
var txt = '4D Interactive Website, where you can trip on 2 solar systems. Here you will meet aliens who introduce you to Planet Build and info about them. Tip: You should use 3D glasses for that and stock popcorn and cola';
var speed = 50;


function typeWriter() {
  if (i < txt.length) {
    document.getElementById("text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
window.onload = typeWriter;
