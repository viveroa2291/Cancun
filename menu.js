var x = 0;

document.getElementById('output-area').innerHTML = x;

function button1() {
  document.getElementById('output-area').innerHTML = ++x;
}

function button2() {
if(x < 2)
  {
      x = 2;
  }
  document.getElementById('output-area').innerHTML = --x;
  
}