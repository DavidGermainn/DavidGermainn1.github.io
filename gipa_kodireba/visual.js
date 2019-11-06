var particles = true,
particleDensity,
   
options = {
   effectWeight: 1,
   outerBuffer: 1.08,
   elementDepth: 220
};

$(document).ready(function() {

   $("#demo1").logosDistort(options);

   if (particles) {
      particleDensity = window.outerWidth * 7.5;
      if (particleDensity < 13000) {
         particleDensity = 13000;
      } else if (particleDensity > 20000) {
         particleDensity = 20000;
      }
      return $('#particle-target').particleground({
         dotColor: '#1ec5ee',
         lineColor: '#0a4e90',
         density: particleDensity.toFixed(0),
         parallax: false
      });
   }
});

$(document).ready(function() {
    $("#demo1").logosDistort(options);
});
