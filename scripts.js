function videoAppear(){

    var el = document.getElementsByClassName("space-video")[0];
    el.style.display = "block"
    function fadeIn(el, time) {
    el.style.opacity = 0;

    var last = +new Date();
    var tick = function() {
    el.style.opacity = +el.style.opacity + (new Date() - last) / time;
    last = +new Date();

    if (+el.style.opacity < 0.90) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
    }
  };

  tick();
}

fadeIn(el, 3000);
    
}

function openForm() {
  document.getElementById('sign_up_container').style.display = "block";
}

function closeForm() {
  document.getElementById('sign_up_container').style.display = "none";
}

function playAudio1() {
  var audio = document.getElementById("audio1");
  audio.play();
}
function playAudio2() {
  var audio = document.getElementById("audio2");
  audio.play();
}
function playAudio3() {
  var audio = document.getElementById("audio3");
  audio.play();
}
function playAudio4() {
  var audio = document.getElementById("audio4");
  audio.play();
}

