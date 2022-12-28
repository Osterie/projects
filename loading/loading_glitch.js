

//import math
//import time // brukes til time.sleep() 
//import os // Brukes til å finne bredde til terminal



/*
-------------------------------------------Learning---------------------------------------------
Rød, oransj, gul, grønn, cyan, blå, lilla
rød =              (255, 0,    0  )
gul =              (255, 255,  0  )
grønn = blå + gul  (0,   255,  0  )
cyan =             (0,   255,  255)
blå =              (0,   0,    255)
lilla =            (128, 0,    128)




TODO: FOr color chaning, både en feature som gjør at fargen starter på rød og ender på blå, og en feature som starter på rød og looper fargene.
-----------------------------------------------------------Bearbeiding av variabler------------------------------------------------- 

Bearbeiding av size, denne gjør at jeg kan få loadingen så brei som mulig
*/


terminal_size = (process.stdout.columns)  

if (terminal_size % 2 != 0) { //Gjør om til partall
    terminal_size -= 1
}

//-----------------------------------------------------------functions for å korte ned--------------------------------------------------------



function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//-------------------------------------------------------------Konstant(er)






//-----------------------------------------------------------Variabler----------------------------------------------------------------

var runs = 1   // Denne bestemmer hvor mange repetisjoner av sekvensen som kjører.
var dot_amount = 28 // Denne bestemmer hvor mange prikker brei loading søylene er? 
var size = terminal_size - dot_amount*2   //BRUK KUN NATURLIGE PARTALL FOR SIZE!

var color = true
// var color_grade = 5 // Kan velge fra og med 1 til og med 8
var x = 90
var rest = 10
var z = 1




function color_change(){
    x = x + 1
    
    str = '\x1B[' + x + 'm'
    if (x == 97){
        x = 90
    }
}





//-------------------------------------------------------functions-------------------------------------------------

async function back() { // går tilbake til start
    

    for (let r = 0; r < runs; r++) {
        z = 1
       
        for (let i = 0; i < size; i++) {
            color_change()
            space_start = ' '.repeat(i)
            
            if (((size-1)-i*2) >= 0){
                space_end = ' '.repeat((size-1)-i*2)
            }
            
            else if (((size-1)-i*2) < 0) {
                space_end = ''

            }

            dot = '.'.repeat(dot_amount)


            if (space_end != '') {
                await sleep(rest)
                
                loading = space_start+dot+space_end+dot
                console.log(str+loading)
            }          


            else if (space_end == ''){
                await sleep(rest)
                
                space_end2 = ' '.repeat(parseInt(2*(i-parseInt((size-1)/2))-1))

                intersection()
                setTimeout(back,3000)
                if (z == 1){
                    for (let s = 1; s<16; s++ ){
                        await sleep(rest*2)
                        
                    }
                }
               if (((size-1)-i) >= 0){
                    space_start = ' '.repeat((size-1)-i)
               }
               else{
                    space_start = ' '
                    space_end2 = ' '.repeat(parseInt(2*(i-parseInt((size-1)/2)))-3)
               }
                
                loading = space_start+dot+space_end2+dot
                console.log(str+loading) //TODO: FIXME:
            }
            
            else{
                
            }
    }   }
}

async function intersection(){
    
    while (z == 1) {
        await sleep(rest)
        z = 0
        
    
        for (let l = 1; l < (Math.ceil(dot_amount/2)+1); l++){
            color_change()
            
            await sleep(rest)
            
            loading = ((space_start)+dot.replace('.'.repeat(l-1),' '.repeat(l-1))+(dot.replace('.'.repeat(l),''.repeat(l-1))))
            
            console.log(str+loading)
            
            
            
        }
        if (dot_amount % 2 == 0){ //om dot:amount er et partall er midten delen 2 brei, derfor console.loges midten 2 ganger
            await sleep(rest)
            console.log(str+loading)
            
        }
        
        for (let m = 2; m <= Math.ceil(dot_amount/2); m++) {
            await sleep(rest)
            color_change()
            if (((Math.ceil(dot_amount/2)+1)-m-1) >= -1){

                n = ((Math.ceil(dot_amount/2)+1)-m-1)
                loading = space_start+dot.replace('.'.repeat(n),' '.repeat(n)) + (dot.replace('.'.repeat(n+1),''))
                
            }
            else{
                
                loading = space_start+dot+dot + 'hei'
            }
            console.log(str+loading)
            
            
        }
    }
}


/*
function color_changing(){

    if (color_grade == 8){
        color_grade = 255
    }

    else if (color_grade == 7){
        color_grade = 85
    }

    else if (color_grade == 6){
        color_grade = 51
    }

    else if (color_grade == 5){
        color_grade = 17
    }

    else if (color_grade == 4){
        color_grade = 15
    }

    else if (color_grade == 3){
        color_grade = 5
    }
    
    else if (color_grade == 2){
        color_grade = 3
    }

    else if (color_grade == 1){
        color_grade = 1
    }
}



function color_change(){

    color_changing()


    if (color == true){
    
    
        if (red == 255 && green <= 254 && blue == 0){  // Lager gul
            green += parseInt(color_grade)
        }
        
        else if (red <= 255 && red >= 1 && green == 255 && blue == 0){  // Lager grønn
            red -= parseInt(color_grade)
        }

        else if (red == 0 && green == 255 && blue <= 254){  // Lager cyan
            blue += parseInt(color_grade)
        }

        else if (red == 0 && green <= 255 && green != 0 && blue == 255){  // Lager blå
            green -= parseInt(color_grade)
        }
        
        else if (red <= 255 && green == 0 && blue <= 255){ // Lager lilla
            red += parseInt(color_grade)
            blue -= parseInt(color_grade)
        }
        
        else{
            pass
        }
    }

}
*/

back()
