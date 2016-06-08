/* global d3, Linear, TweenMax, TimelineMax, $ */

// Get path start point for placing marker
function pathStartPoint(path) {
  var d = path.attr('d'),
  dsplitted = d.split(' ');
  return dsplitted[1].split(',');
}

function translateAlong(path) {
  var l = path.getTotalLength();
  return function(i) {
    return function(t) {
      var p = path.getPointAtLength(t * l);
      return 'translate(' + p.x + ',' + p.y + ')'; //Move marker
    }
  }
}

function transition(marker, path) {
  marker.transition()
      .duration(3000)
      .attrTween('transform', translateAlong(path.node()));// infinite loop
}

const svg = d3.select('#hackathon-box');

const raspberry = svg.select('#raspberrypi-image');
const raspberryPath = svg.select('path#raspberrypi-path');
const cardboard = svg.select('#cardboard-image');
const cardboardPath = svg.select('path#cardboard-path');
const arduino = svg.select('#arduino');
const arduinoPath = svg.select('path#arduino-path');
const oculus = svg.select('#oculus');
const oculusPath = svg.select('path#oculus-path');


raspberry
  .attr('transform', 'translate(' + pathStartPoint(raspberryPath) + ')');

cardboard
  .attr('transform', 'translate(' + pathStartPoint(cardboardPath) + ')');

arduino
  .attr('transform', 'translate(' + pathStartPoint(arduinoPath) + ')');

oculus
  .attr('transform', 'translate(' + pathStartPoint(oculusPath) + ')');

$('#section2').waypoint(function() {
  TweenMax.to('#top-polygon', 1, {
    y: -50,
    x: -85
  });

  transition(raspberry, raspberryPath);
  transition(cardboard, cardboardPath);
  transition(arduino, arduinoPath);
  transition(oculus, oculusPath);

  // Fire only once, then destroy this waypoint
  this.destroy();
});
