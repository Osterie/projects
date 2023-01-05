//struktur rekkefølge:
//Klasser, globale variabler
//window.onload = winInit
//også Funskjoner sikkert

const get_hue_expression = document.getElementById("hue_expression");
const get_saturation_expression = document.getElementById("saturation_expression");
const get_lightness_expression = document.getElementById("lightness_expression");
const get_size_lower = document.getElementById("size_lower");
const get_size_upper = document.getElementById("size_upper");
const get_upscale = document.getElementById("upscale");

get_hue_expression.addEventListener("change",  function(){hsl_loop(1)});
get_saturation_expression.addEventListener("change",  function(){hsl_loop(2)});
get_lightness_expression.addEventListener("change",  function(){hsl_loop(3)});
get_size_lower.addEventListener("change", change_size_lower);
get_size_upper.addEventListener("change", change_size_upper);
get_upscale.addEventListener("click", function() {create_squares(size_lower, size_upper)})

var canvas = elGetId("canvas");
canvas.addEventListener("mousedown", function (e) {get_cursor_position(canvas, e);});
canvas.addEventListener("mouseup", function (e) {get_cursor_position(canvas, e);});

const ctx = canvas.getContext("2d");
// ctx.imageSmoothingQuality = "high"
ctx.imageSmoothingEnabled = false

var animId;

// var old_size_upper = 0;
// var old_size_lower = 0;
// var redraw_background = true;
var size_lower = -10;
var size_upper = 10;
var size = (Math.abs(size_lower) + size_upper)/pixel_size;

var hue = get_hue_expression.value
var saturation = get_saturation_expression.value
var lightness = get_lightness_expression.value

var matrix_squares = [];

//GUIDING BOX FOR RESIZE


var max_size = 0;
var img
var dataURL

const get_pixel_size = document.getElementById("pixel_size");
get_pixel_size.addEventListener("change", change_pixel_size);
var pixel_size = parseFloat(get_pixel_size.value);

//Zooming
var zooming;
var clicked_released_xpos;
var clicked_released_ypos;



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
      `hsl( ${this.hue}, ${this.saturation}%, ${this.lightness}%)`
      );
    }

  hue_changed(x, y) {
    var hue_expression = get_hue_expression.value.replace(/X/g, x).replace(/Y/g, y);
    this.hue =  Function(`return + ${hue_expression}`)()
    this.tegn()
  }

  saturation_changed(x, y) {
    var saturation_expression = get_saturation_expression.value.replace(/X/g, x).replace(/Y/g, y);
    this.saturation = Math.abs(( (100 + Function(`return ${saturation_expression}`)()) % 200) - 100)
    this.tegn()

  }
  lightness_changed(x, y) {
    var lightness_expression = get_lightness_expression.value.replace(/X/g, x).replace(/Y/g, y);
    this.lightness = Math.abs(( (100 + Function(`return ${lightness_expression}`)()) % 200) - 100)
    this.tegn()
  }
}


window.onload = winInit;

function winInit() {
  // ctx.filter = "hue-rotate(200deg)" INTERESTING!
  tegnBrukCanvas("canvas");
  tegnBrukBakgrunn("black");
  tegnBrukSynsfelt(0,1,0,1)
  create_squares(size_lower, size_upper);
}

function hsl_loop(letter) {

  if (letter === 1) {
    var letter_method = Square.prototype.hue_changed
  }

  else if (letter === 2) {
    var letter_method = Square.prototype.saturation_changed
  }

  else if (letter === 3) {
    var letter_method = Square.prototype.lightness_changed;
  }

  tegnBrukBakgrunn("black");

  for (let x = size_lower; x < size_upper; x++) {
    for (let y = size_lower; y < size_upper; y++) {
      letter_method.call(matrix_squares[x][y], (x*pixel_size) , (y*pixel_size) );
    }
  }

  img = new Image();
  dataURL = canvas.toDataURL();
  img.src = dataURL;

}

function create_squares(start, end) {
  size = (Math.abs(size_lower) + size_upper)/pixel_size;
  new_pixels(start, start, end, end)
}

function change_hue(x, y) {

    let returnme = get_hue_expression.value
    .replace(/X/g, x)
    .replace(/Y/g, y);
    return Function(`return ${returnme}`)();
}

function change_saturation(x, y) {

    let returnme = get_saturation_expression.value
      .replace(/X/g, x)
      .replace(/Y/g, y);
    return  Math.abs(( (100 + Function(`return + ${returnme}`)()) % 200) - 100);
}

function change_lightness(x, y) {

    let returnme = get_lightness_expression.value
    .replace(/X/g, x)
    .replace(/Y/g, y);
    return  Math.abs(( (100 + Function(`return + ${returnme}`)()) % 200) - 100); 
}

function change_size_upper() {

  var new_size = parseInt(get_size_upper.value);

  if (new_size > size_upper) {
    var old_size_upper = size_upper;
    size_upper = new_size;

    if (new_size > max_size) {
      max_size = new_size;
      
      size = (Math.abs(size_lower) + size_upper)/pixel_size;
      // ctx.imageSmoothingQuality = "high"
      ctx.imageSmoothingEnabled = false
      // tegnBrukBakgrunn("black")
      ctx.drawImage(img, 0, (600/size)*(new_size-old_size_upper) , ((600/size)*(size-(new_size-old_size_upper))).toFixed(4), ((600/size)*(size-(new_size-old_size_upper))).toFixed(4));

      new_pixels(size_lower, old_size_upper, size_upper, size_upper)

    }
  }
  size_upper = new_size;

}

function change_size_lower() {

  var new_size = parseInt(get_size_lower.value);

  if (new_size < size_lower) {
    var old_size_lower = size_lower;
    size_lower = new_size;

    if (new_size < max_size) {
      max_size = new_size;

      size = (Math.abs(new_size) + size_upper)/pixel_size;

      // tegnBrukBakgrunn("black")
      
      ctx.drawImage(img, (600/size)*(old_size_lower-new_size), 0, ((600/size)*(size-(old_size_lower-new_size))).toFixed(4), ((600/size)*(size-(old_size_lower-new_size))).toFixed(4));
      new_pixels(new_size, new_size, old_size_lower, size_upper)
    }
  }
  size_lower = new_size;
}

function change_pixel_size() {


  // matrix_squares = [];

  if (get_pixel_size.value.includes("\"")){
    pixel_size = get_pixel_size.value.replace( /\"/g , "")
  }
  else{
    pixel_size = parseFloat(get_pixel_size.value);
  }

  size_lower = (get_size_lower.value/pixel_size)
  size_upper = (get_size_upper.value/pixel_size)
  size = (Math.abs(size_lower) + size_upper)
  create_squares(size_lower, size_upper);
}

//FIXME: pixel_size creates a bug when changing size 
function get_cursor_position(canvas, event) {
  const rect = canvas.getBoundingClientRect();

  var absolute_width_square = canvas.width / size;
  var absolute_heigth_square = canvas.height / size;

  if (event.type == "mousedown") {
    
    //Absoulut_width/height_square is the size of each pixel on the canvas.

    canvas.addEventListener("mousemove", zoom_guider);

    zooming = true;
    //finds the absolute coordinates clicked
    var down_x = (event.clientX - rect.left) / absolute_width_square + size_lower;
    var down_y = -((event.clientY - rect.top) / absolute_width_square + size_lower);
    clicked_released_xpos = [down_x];
    clicked_released_ypos = [down_y];
  }
  
  else if (event.type == "mouseup") {
    canvas.removeEventListener("mousemove", zoom_guider);
    zooming = false;
    
    var up_x = (event.clientX - rect.left) / absolute_width_square + size_lower;
    var up_y = -((event.clientY - rect.top) / absolute_heigth_square + size_lower);

    clicked_released_xpos[1] = up_x;
    clicked_released_ypos[1] = up_y;

    //sorts from lowest to highest
    clicked_released_xpos.sort(function (a, b) {return a - b;});
    clicked_released_ypos.sort(function (a, b) {return a - b;});

    var difference = Math.abs(size_lower) - Math.abs(size_upper);

    if (event.ctrlKey) {
      tegnBrukXY(size_lower, size_upper, size_lower, size_upper)
    }

    else{
      tegnBrukXY(clicked_released_xpos[0], clicked_released_xpos[1], clicked_released_ypos[0] - difference, clicked_released_ypos[1] - difference);
    }

    //TODO: No point in drawing everything of only a small part is shown,
    //make it so that you can only draw complete squares with zoom_guider, and only draw and show the pixels "selected"
    create_squares(size_lower, size_upper);
  }
}

function zoom_guider() {
  // tegnBrukBakgrunn("black");
  ctx.drawImage(img, 0, 0, 600, 600);

  const rect = canvas.getBoundingClientRect();

  var absolute_width_square = canvas.width / size;
  var absolute_heigth_square = canvas.height / size;
  
  current_x = 
  (event.clientX - rect.left) / absolute_width_square + size_lower;
  current_y =
    -((event.clientY - rect.top) / absolute_heigth_square + size_lower);

  var difference = Math.abs(size_lower) - Math.abs(size_upper);
  clicked_released_xpos[1] = current_x;
  clicked_released_ypos[1] = current_y;

  tegnFirkant(
    (clicked_released_xpos[0]),
    (clicked_released_ypos[0] - difference),
    current_x,
    (current_y - difference),
    "blue",
    false
  );
}

function new_pixels(dimension_start_x, dimension_start_y, dimension_width, dimension_length) {
  // tegnBrukXY(size_lower, size_upper, size_lower, size_upper);

  //column
  for (let x = dimension_start_x; x < dimension_width; x++) {
    if (matrix_squares[x] == undefined) {
      matrix_squares[x] = [];
    }

    for (let y = dimension_start_y; y < dimension_length; y++) {
      matrix_squares[x][y] = new Square(
        ((x*pixel_size)),
        ((y*pixel_size)),
        change_hue(x*pixel_size, y*pixel_size),
        change_saturation(x*pixel_size, y*pixel_size),
        change_lightness(x*pixel_size, y*pixel_size),
        pixel_size
      );
    }
  }
  if (dimension_start_x == dimension_start_y && dimension_width == dimension_length ) {
    img = new Image();
    dataURL = canvas.toDataURL();
    img.src = dataURL;
    return
  }

  //row
  for (let x = dimension_start_y; x < dimension_length; x++) {
    if (matrix_squares[x] == undefined) {
      matrix_squares[x] = [];
    }

    for (let y = dimension_start_x; y < dimension_width; y++) {

      matrix_squares[x][y] = new Square(
        ((x*pixel_size)),
        ((y*pixel_size)),
        change_hue(x*pixel_size, y*pixel_size),
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

//------------------------------------------------------------------------------\\
//! EXPLORE!
//------------------------------------------------------------------------------\\

//math.js library is recommended
//npm install mathjs

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
//try ! v2a([  (((1 + Math.sqrt(5)) / 2) ** (X+Y) - ((1 - Math.sqrt(5)) / 2) ** (X+Y)) /   Math.sqrt(5), X*Y*10], [0,1], "deg")
//try ! (((X)**2 + (Y)**2)**2 - ((X)**2 - (Y)**2) )/(X+Y)/100
//try ! ((X)**2 + (Y)**2)**2 /(X*Y)/1

//OTHER
//try (X*Y)**2 and saturation: X*Y -100
//try X+Y and saturation abs(X)*10 and hue abs(X)*10
//try X+Y and saturation abs(X*Y)*10
//try X+Y and saturation abs(X*Y)*abs((X)**2) and hue (X)**2*(Y)**2






//Lemniscate
// ((X)**2 + (Y)**2)**2 - ((X)**2 - (Y)**2)




// Fn =
// (((1 + Math.sqrt(5)) / 2) ** (X+Y) - ((1 - Math.sqrt(5)) / 2) ** (X+Y)) /
// Math.sqrt(5);

// console.log(math.i.re, "real")
// console.log(math.i.im, "imaginary")
// console.log(math.multiply(math.i, 10).im, "imaginary")


//------------------START--------------------
//TO BE USED ANOTHER TIME?
// const get_runspeed = document.getElementById("runspeed");
// get_runspeed.addEventListener("change", change_runspeed);
// var runspeed = 1;
// function change_runspeed() {
//   if (get_runspeed.value == 0) {
//     clearInterval(animId);
//   } else {
//     if (animId) {
//       clearInterval(animId);
//     }
//     runspeed = get_runspeed.value;
//     animId = setInterval(draw_squares, 1000 / runspeed);
        //TODO: the draw_squares function must be made again if i want make a changing variable that changes every second or whatever
//   }
// }
//------------------END--------------------

//TODO: Minor fix in the new_pixels function, it creates the corner piece twice

//TODO: Research complex plotting or whatever, make an option to change to using complex numbers?

//TODO: Create a settings button where settings can be changed/toggled?
//TODO:! Add a button for the option to redraw the black background, creates very interesting patterns when the size of the pixels are < 1
//TODO: Make an option to turn on the sawtooth pattern for hue too? and create lower and upper limit, this.hue =  Math.abs(( (100 + Function("return " + hue_expression)()) % 200) - 100)
//!TODO: Create a option to toggle between clicking a button to run script and running script when a variable is changed.



//TODO: Create option to make a variable that changes every second f.eks. goes from 1 to 10 then 10 to 1, call it n and then n can be
// used in the color chooser

//TODO: Add more color models, i.e rgb and such



//*------------------------------------------------COMPLETED---------------------------------------
//* Create variable for width and height of squares(or just size of squares), must change array size to compensate
//* Create vector to angle function and make it usable in hue, saturation and color variables. Works for radians and degrees!
//* Make a smooth tranistion for saturation and lighness
//* Maybe will have to, but make a "enhance" button, if the image is unclear, it should be possible to redraw every pixel
//* It is probably faster/more efficient to just change color of all squares when changing color, instead of creating new squares
//* Use same draw image method for zoom_outline