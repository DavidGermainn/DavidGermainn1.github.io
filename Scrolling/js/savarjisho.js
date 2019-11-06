var sections = document.getElementsByClassName( "section")
var controller = new ScrollMagic.Controller();
var scenes = [];
for (let i = 0; i<sections.length; i++){
    sections [i].id = "s" + i;
    scenes[i] = new ScrollMagic.Scene({
        triggerElement: sections[i]
    });
        scenes[i].addTo(controller);
    scenes[i].on("enter", function (event) {
       let bg = event.target.triggerElement().dataset.bg;
       document.body.style.backgroundColor = bg;
    });
}