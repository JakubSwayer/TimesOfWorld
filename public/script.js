var city = ["NY","PAR","HEL","TOK"]
var timeZone = [-6,0,1,7]

function Clock() {

  var d = new Date();

  var hour = (d.getHours() * 30) + (d.getMinutes() * 0.5);
  var minute = (d.getMinutes() * 6) + (d.getSeconds() * 0.1);
  var second = d.getSeconds() * 6;

  // var h = "rotate(" + hour + "deg)";
  var h = []
  var m = "rotate(" + minute + "deg)";
  var s = "rotate(" + second + "deg)";

for (var i = 0; i < city.length; i++) {
  h[i] = "rotate(" + (hour + timeZone[i]*30)+ "deg)";
  $('#' + city[i]).css('transform', h[i]);
}
  // $('.hour').css('transform', h);
  $('.minute').css('transform', m);
  $('.second').css('transform', s);

  setTimeout(Clock, 1000);
}
