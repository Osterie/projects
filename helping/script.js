var get_integral = document.getElementById("integral");
var get_start = document.getElementById("start");
var get_end = document.getElementById("end");
var run = document.getElementById("run");
run.addEventListener("click", running);

function f(x) {
  let returnme = get_integral.value.replace(/x/g, x);
  return Function("return " + returnme)();
}

var n = 100+0;

function running() {
  var a = parseFloat(get_start.value);
  var b = parseFloat(get_end.value);
  var dx = (b - a) / n;
  var sum = 0;

  for (let i = 0; i < n; i++) {
    sum += f(a + i * dx) * dx;
  }
  console.log(sum);
}