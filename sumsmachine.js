/* set the form submit event handler when the document's loaded */
$(document).ready(function() {
  $('#form').submit(processForm);
});

/* form submit event handler */
function processForm() {
  /* retrieve the fields (using '1*' to convert strings to numbers */
  var range = 1* $('#form input[id="range"]').val();
  var number = 1* $('#form input[id="number"]').val();
  var minus = $('#form input[id="minus"]').is(':checked');

  /* generate the sums into a string */
  var sums = [];
  for (var i = 1; i <= number; i++) {
    sums.push('<div class="sum">'+rangesum(range,minus)+'</div>');
  }
  /* add the sums to the DOM (replacing current sums) */
  $('#sums').html(sums.join(''));  
  return false;
}

/* auxiliary functions */
function rangesum(m,o) {
  var r = ran(m);
  return sum(r,o);
}

function sum(r,o) {
  var s = ran(r);
  var t = r-s;
  if (o) {
    o = ran(1);
  }
  if (o) {
    return (r + ' - ' + s + ' =  .');
  } else {
    return (s + ' + ' + t + ' =  .');
  }
}

function ran(x) {
  return Math.floor(Math.pow(Math.random(),3/4)*(x+1));
  /* the power function gives a bit more weight to higher numbers */
}
