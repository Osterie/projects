

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


//-----------------------------------------------------------Variabler----------------------------------------------------------------

var runs = 6  // Denne bestemmer hvor mange repetisjoner av sekvensen som kjører.
var dot_amount = 5// Denne bestemmer hvor mange prikker brei loading søylene er? 
var size = terminal_size - dot_amount*2 //terminal_size kan byttes ut for valgfritt tall(partall) under termianl størrelsen.

var color = true

// var color_grade = 5 // Kan velge fra og med 1 til og med 8

var x = 90
var rest = 10
var z = 1




rest_period = (Math.ceil(dot_amount/2)) + Math.ceil(dot_amount/2)+1

//-------------------------------------------------------------Konstant(er)












function color_change(){
    
    if (color == false){
        return str = '\x1B[1m'
        
    }
    else{
        
        x++
        str = '\x1B[' + x + 'm'
        if (x == 97){
            x = 90
        }

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
                
                
                if (z == 1){
                    
                    
                    for (let s = 1; s<=rest_period; s++ ){
                        await sleep(rest)
                        
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
                console.log(str+loading) 
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
                
                loading = space_start+dot+dot 
            }
            console.log(str+loading)
            
            
        }
    }
}



back()
