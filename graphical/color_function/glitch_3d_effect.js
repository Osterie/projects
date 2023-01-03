const get_hue_expression = document.getElementById("hue_expression");
const get_saturation_expression = document.getElementById("saturation_expression");
const get_lightness_expression = document.getElementById("lightness_expression");

get_hue_expression.addEventListener("change", change_hue_loop);
get_saturation_expression.addEventListener("change", change_saturation_loop);
get_lightness_expression.addEventListener("change", change_lightness_loop);

const get_size_lower = document.getElementById("size_lower");
const get_size_upper = document.getElementById("size_upper");
get_size_lower.addEventListener("change", change_size_lower);
get_size_upper.addEventListener("change", change_size_upper);


class Square {
  constructor(xpos, ypos, hue, saturation, lightness, pixel_size) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.hue = hue;
    this.saturation = saturation;
    this.lightness = lightness;
    this.pixel_size = pixel_size;
    this.tegn()
  }
  
  tegn() {
    tegnFyltRektangel(
      this.xpos,
      this.ypos,
      this.pixel_size,
      this.pixel_size,
      "hsl(" + this.hue + ", " + this.saturation + "%," + this.lightness + "%)"
      );
    }
    
    hue_changed(x, y) {
      var hue_expression = get_hue_expression.value.replace(/X/g, x).replace(/Y/g, y);
      this.hue =  Function("return " + hue_expression)()
      this.tegn()
    }
    
    saturation_changed(x, y) {
      var saturation_expression = get_saturation_expression.value.replace(/X/g, x).replace(/Y/g, y);
      this.saturation = Math.abs(( (100 + Function("return " + saturation_expression)()) % 200) - 100)
      this.tegn()
      
    }
    lightness_changed(x, y) {
      var lightness_expression = get_lightness_expression.value.replace(/X/g, x).replace(/Y/g, y);
      this.lightness = Math.abs(( (100 + Function("return " + lightness_expression)()) % 200) - 100)
      this.tegn()
  }
}

var ctx;
var canvas = elGetId("canvas");

var animId;
var old_size_upper = 0;
var old_size_lower = 0;
var size_lower = -10;
var size_upper = 10;
var size = (Math.abs(size_lower) + size_upper)/pixel_size;

var matrix_squares = [];

var redraw_background = true;

var hue = get_hue_expression.value
var saturation = get_saturation_expression.value
var lightness = get_lightness_expression.value

// var runspeed = 1;

function change_hue_loop() {
  size = (Math.abs(size_lower) + size_upper)/pixel_size;

  tegnBrukBakgrunn("black");

  for (let x = size_lower; x < size_upper; x++) {
    for (let y = size_lower; y < size_upper; y++) {
      matrix_squares[x][y].hue_changed((x*pixel_size), (y*pixel_size))
    }
  }
}

function change_saturation_loop() {
  size = (Math.abs(size_lower) + size_upper)/pixel_size;
  
  tegnBrukBakgrunn("black");

  for (let x = size_lower; x < size_upper; x++) {
    for (let y = size_lower; y < size_upper; y++) {
      matrix_squares[x][y].saturation_changed((x*pixel_size), (y*pixel_size))
    }
  }
}

function change_lightness_loop() {
  size = (Math.abs(size_lower) + size_upper)/pixel_size;
  
  tegnBrukBakgrunn("black");

  for (let x = size_lower; x < size_upper; x++) {
    for (let y = size_lower; y < size_upper; y++) {
      matrix_squares[x][y].lightness_changed((x*pixel_size), (y*pixel_size))
    }
  }
}


    
function create_squares() {
  

  size = (Math.abs(size_lower) + size_upper)/pixel_size;
  
  tegnBrukBakgrunn("black");
  tegnBrukXY(size_lower, size_upper, size_lower, size_upper);
  // tegnBrukXY(-30, 30, -30, 30);
  



  for (let x = size_lower; x < size_upper; x++) {
    if (matrix_squares[x] == undefined) {
      matrix_squares[x] = [];
    }
  
    for (let y = size_lower; y < size_upper; y++) {

      matrix_squares[x][y] = new Square(
        ((x*pixel_size)),
        ((y*pixel_size)),
        x*y*5 ,
        // change_hue(x*pixel_size, y*pixel_size),
        change_saturation(x*pixel_size, y*pixel_size),
        change_lightness(x*pixel_size, y*pixel_size),
        pixel_size
      );
    }
  }
  
  if (size >= 40) {

      }
    


      img = new Image();
      dataURL = canvas.toDataURL();
    
      img.src = dataURL;
      
  // for (let x = old_size_upper; x < size + old_size_lower; x++) {
  //   for (let y = 0; y < size; y++) {

  //     matrix_squares[x][y] = new Square(
  //       ((x*pixel_size) + size_lower),
  //       ((y*pixel_size) + size_lower),
  //       change_color((x*pixel_size) + size_lower, (y*pixel_size) + size_lower),
  //       change_saturation((x*pixel_size) + size_lower, (y*pixel_size) + size_lower),
  //       change_hue((x*pixel_size) + size_lower, (y*pixel_size) + size_lower),
  //       pixel_size
  //     );
  //   }
  // }
}
var scalex1 = size_lower;
var scalex2 = size_upper;
var scaley1 = size_lower;
var scaley2 = size_upper;

var square_saturation = 100;
var square_hue = 50;

var scaled = false;
var max_size = 0;


var img
var dataURL

function draw_squares() {
tegnBrukBakgrunn("black");

  // if (redraw_background) {
  //   tegnBrukBakgrunn("black");
  // }
  
  // tegnBrukBakgrunn("black");
  // size = (Math.abs(size_lower) + size_upper)/pixel_size; //TODO: Redundant?

  // if (!scaled) 
  // {
  // }
  // tegnBrukBakgrunn("black");

  // for (let x = size_lower; x < size_upper; x++) {
  //   for (let y = size_lower; y < size_upper; y++) {
  //     matrix_squares[x][y].tegn();
  //   }
  // }
}

test = document.getElementById('test')
test.addEventListener("click", testing)
function testing() {
  
  tegnBrukBakgrunn('black')

    
    
  
}


function change_hue(x, y) {
  
    let returnme = get_hue_expression.value
    .replace(/X/g, x)
    .replace(/Y/g, y);
    return Function("return " + returnme)();

}

function change_saturation(x, y) {

    let returnme = get_saturation_expression.value
      .replace(/X/g, x)
      .replace(/Y/g, y);
    return Function("return " + returnme)() % 100; //TODO: ! This is not a good soluution, i want a smooth tranistion, this is sudden
}

function change_lightness(x, y) {
    let returnme = get_lightness_expression.value
    .replace(/X/g, x)
    .replace(/Y/g, y);
    return Function("return " + returnme)() % 100; //TODO: ! This is not a good soluution, i want a smooth tranistion, this is sudden 
}

// const get_runspeed = document.getElementById("runspeed");
// get_runspeed.addEventListener("change", change_runspeed);


const get_pixel_size = document.getElementById("pixel_size");
get_pixel_size.addEventListener("change", change_pixel_size);

var pixel_size = parseFloat(get_pixel_size.value);

function color_changed() {
  old_size_upper = 0;
  old_size_lower = 0;

  create_squares();
  draw_squares();
}

function change_size_upper() {
  new_size = parseInt(get_size_upper.value);

  if (new_size > size_upper) {
    old_size_upper = size_upper;
    size_upper = new_size;

    if (new_size > max_size) {
      max_size = new_size;
      create_squares();
    }
  }
  size_upper = new_size;

  draw_squares();
}


function change_size_lower() {
  // tegnBrukXY(-50, 50, -50, 50);

  new_size = parseInt(get_size_lower.value);
  

  if (new_size < size_lower) {
    old_size_lower = size_lower;
    size_lower = new_size;

    if (new_size < max_size) {
      max_size = new_size;
      // console.log(new_size, old_size_lower)

      // console.log('going to create new squarses')
      // create_squares();
// 
      console.log(new_size)
      tegnBrukBakgrunn('black')
      tegnBrukXY(new_size, size_upper, new_size, size_upper);

      // tegnBrukXY(-30, 30, -30, 30)
      // tegnBrukBakgrunn('black')

  
      ctx.drawImage(img, 28, 0, 0.1+(600/21)*20, 0.1+(600/21)*20); 
      // (600/size)*old_size  

      // tegnBrukXY(-20 , 20, -20, 20);

//TODO: Make this a function?
for (let x = new_size; x < old_size_lower; x++) {
  if (matrix_squares[x] == undefined) {
    matrix_squares[x] = [];
  }

  for (let y = new_size; y < size_upper; y++) {
    matrix_squares[x][y] = new Square(
      ((x*pixel_size)),
      ((y*pixel_size)),
      x*y*5 ,
      // change_hue(x*pixel_size, y*pixel_size),
      change_saturation(x*pixel_size, y*pixel_size),
      change_lightness(x*pixel_size, y*pixel_size),
      pixel_size
    );
  }
}

for (let x = new_size; x < size_upper; x++) {
  if (matrix_squares[x] == undefined) {
    matrix_squares[x] = [];
  }

  for (let y = new_size; y < old_size_lower; y++) {
    matrix_squares[x][y] = new Square(
      ((x*pixel_size)),
      ((y*pixel_size)),
      x*y*5 ,
      // change_hue(x*pixel_size, y*pixel_size),
      change_saturation(x*pixel_size, y*pixel_size),
      change_lightness(x*pixel_size, y*pixel_size),
      pixel_size
    );
  }
}
img = new Image();
dataURL = canvas.toDataURL();

img.src = dataURL;
    }
  }
  
  size_lower = new_size;
  // create_squares();
  // draw_squares();
}


// const dataURL = canvas.toDataURL();


// const img = new Image();
// img.src = dataURL;

// img.onload = function() {
//   ctx.drawImage(img, 0, 0);
// };

// ctx.drawImage(img, x, y, width, height);

//TODO: Use same draw image method for zoom_outline

function change_pixel_size() {
  old_size_upper = 0;
  old_size_lower = 0;
  matrix_squares = [];
  

  if (get_pixel_size.value.includes('\'')){
    pixel_size = get_pixel_size.value.replace( /\'/g , '')
    size = (Math.abs(size_lower) + size_upper)/pixel_size
  }
  else{
    pixel_size = parseFloat(get_pixel_size.value);
    size = (Math.abs(size_lower) + size_upper)/pixel_size

  }
  create_squares();
  draw_squares();
}

// function change_runspeed() {
//   if (get_runspeed.value == 0) {
//     clearInterval(animId);
//   } else {
//     if (animId) {
//       clearInterval(animId);
//     }
//     runspeed = get_runspeed.value;
//     animId = setInterval(draw_squares, 1000 / runspeed);
//   }
// }

var down_x;
var down_y;
var up_x;
var up_y;
var zooming;
var list1;
var list2;
var absolute_width_square = canvas.width / size;;
var absolute_heigth_square =  canvas.height / size;;

function get_cursor_position(canvas, event) {
  const rect = canvas.getBoundingClientRect();

  if (event.type == "mousedown") {
    absolute_width_square = canvas.width / size;
    absolute_heigth_square = canvas.height / size;

    zooming = true;
    //finds the absolute coordinates clicked (f.eks 400) and
    down_x = (event.clientX - rect.left) / absolute_width_square + size_lower;
    down_y = -((event.clientY - rect.top) / absolute_width_square + size_lower);
    list1 = [down_x];
    list2 = [-down_y];
  } else if (event.type == "mouseup") {
    zooming = false;
    up_x = (event.clientX - rect.left) / absolute_width_square + size_lower;
    up_y = -((event.clientY - rect.top) / absolute_heigth_square + size_lower);

    scaled = true;
    if (event.ctrlKey) {
      scaled = false;
    }

    list1 = [down_x, up_x];
    list2 = [down_y, up_y];

    list1.sort(function (a, b) {
      return a - b;
    });
    list2.sort(function (a, b) {
      return a - b;
    });

    tegnBrukXY(list1[0], list1[1], list2[0], list2[1]);

    create_squares();
    draw_squares();
  }
}

function zoom_guider() {
  if (zooming) {
    tegnBrukBakgrunn("black");
    const rect = canvas.getBoundingClientRect();
    
absolute_width_square = canvas.width / size;
absolute_heigth_square = canvas.height / size;


    current_x =
      (event.clientX - rect.left) / absolute_width_square + size_lower;
    current_y =
      (event.clientY - rect.top) / absolute_heigth_square + size_lower;

    var difference = Math.abs(size_lower) - Math.abs(size_upper);
    list1[1] = current_x;
    list2[1] = current_y;

    tegnFirkant(
      (list1[0]),
      (-list2[0] - difference),
      current_x,
      (-current_y - difference),
      "blue",
      false
    );
  }
}

canvas.addEventListener("mousemove", zoom_guider);
canvas.addEventListener("mousedown", function (e) {get_cursor_position(canvas, e);});
canvas.addEventListener("mouseup", function (e) {get_cursor_position(canvas, e);});

window.onload = winInit;
function winInit() {
  ctx = canvas.getContext("2d");
  tegnBrukCanvas("canvas");

  //For refresh every second(no use for feature yet)
  // animId = setInterval(create_squares,1000/runspeed);
  tegnBrukBakgrunn("black");
  // ctx.filter = 'hue-rotate(200deg)' INTERESTING!
  tegnBrukSynsfelt(0,1,0,1)
  create_squares();

  // draw_squares();

  // tegnBrukXY(size_lower, size_upper, size_lower, size_upper);
  // tegnBrukXY(-10, 11, -10, 11);

  // for (let i = -10; i < 11; i++) {
  //   matrix_squares[0][100+i] = new Square(
  //     ((10*pixel_size)),
  //     ((i*pixel_size)),
  //     i*100,
  //     100,
  //     50,
  //     pixel_size
  //   );    
  // }

  
}


//------------------------------------------------------------------------------\\
//! EXPLORE!
//------------------------------------------------------------------------------\\

// WITH SIZE 100 (and also try 1000?:)
// Change color with these:
//ALSO TRY TO USE Math.random() * expression. i.e => Math.random() * (X*Y)
//
// try X*Y
// try X*n/Y
// try X+Y
// try X-Y
// try -X+Y
// try -X-Y
// try X*3-Y*5
// try X*(X/Y)
// try X**X-Y**Y
// try Math.sin(X)*100 + Math.sin(Y)*100)
// try (X+Y)**2
// try X*Y**2 - (Y**3)
// try X*Y**2 - (Y**2)
// try X*Y**2
// try (X*3-Y)*(Y*10)
// try (X*3-Y)*(Y*120)
// try (sin(X*Y)*2)**6
//try Math.random()*1000
//try Math.min(X,Y)

//SUPER COOL
//try ln(abs(X*Y))*100
//try ln(X*Y)*100
//try (Y)**2 + (X)**2
//try (Y/10)**2 + (X/10)**2
//try X%Y * n or whatever
//try X<<Y
//try X/Y*1000
//try (Y)**2>>X*10000
//try Y&X
//try Y^X
//try Y|X
//try (X.Y)^100
//try (X.Y)**2
//try (X.Y)*X*Y
//try (X.Y)*X
//try (X.Y)*ln(X)
//try sqrt((X)**2 + (Y)**2)
//try sqrt((X)**3 + (Y)**3)
//try sqrt((X)**4 + (Y)**3)
//try sqrt((X)**4 + (Y)**4)
//try sqrt((X)**4 + (Y)**5)
//try Math.log(X*Y)*1000
//try Math.acosh(abs(X*Y))*1000
//try Math.atan(abs(X*Y))*100000
//try Math.cbrt(abs(X*Y))*10
//try !     Math.clz32(abs(X*Y))*100
//try Math.cos(X*Y)*100
//try Math.sin(X*Y)*100
//try Math.tan(X*Y)*100
//try abs(X.Y)*Y*X
//try XyXy
//try Xy*X
//try ((X+Y)**2) % ((X)**2)
//try Math.min(X,((X)**2)/Y)
//try !   Math.random() * (X - Y) + X
//try !   Math.random() * (X*Y)
//try ! Math.random() * (X+Y) and saturation Math.random() * ((abs(X)+abs(Y))) and hue Math.random() * ((abs(X)+abs(Y)))
//try v2a([X,Y], [Y+Y,X*2])
//try v2a([X,Y], [X,10])
//try ! v2a([  (((1 + Math.sqrt(5)) / 2) ** (X+Y) - ((1 - Math.sqrt(5)) / 2) ** (X+Y)) /   Math.sqrt(5), X*Y*10], [0,1], 'deg')
//try ! (((X)**2 + (Y)**2)**2 - ((X)**2 - (Y)**2) )/(X+Y)/100
//try ! ((X)**2 + (Y)**2)**2 /(X*Y)/1

//OTHER
//try (X*Y)**2 and saturation: X*Y -100
//try X+Y and saturation abs(X)*10 and hue abs(X)*10
//try X+Y and saturation abs(X*Y)*10
//try X+Y and saturation abs(X*Y)*abs((X)**2) and hue (X)**2*(Y)**2




//math.js library is recommended
//npm install mathjs

//Lemniscate
// ((X)**2 + (Y)**2)**2 - ((X)**2 - (Y)**2)




// Fn =
// (((1 + Math.sqrt(5)) / 2) ** (X+Y) - ((1 - Math.sqrt(5)) / 2) ** (X+Y)) /
// Math.sqrt(5);

// console.log(math.i.re, 'real')
// console.log(math.i.im, 'imaginary')
// console.log(math.multiply(math.i, 10).im, 'imaginary')

//TODO: Create option to make a variable that changes every second f.eks. goes from 1 to 10 then 10 to 1, call it n and then n can be
// used in the color chooser
//!TODO: create variable for width and height of squares(or just size of squares), must change array size to compensate

//TODO:! Add a button for the option to redraw the black background, creates very interesting patterns when the size of the pixels are < 1
//TODO: Is probably faster/more efficient to just change color of all squares when changing color, instead of creating new squares
//TODO: Create vector to angle function and make it usable in hue, saturation and color variables.
//TODO: Add more color models, i.e rgb and such

//TODO: Make an option to turn on the sawtooth pattern for hue too? and create lower and upper limit, this.hue =  Math.abs(( (100 + Function("return " + hue_expression)()) % 200) - 100)

//!TODO: Create a option to toggle between clicking a button to run script and running script when a variable is changed. 
