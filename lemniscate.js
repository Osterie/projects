


//---------------------------------INFINITY SYMBOL-------------------------------
function func_inf_neg(x){
    
    y = (-0.5)*(Math.sqrt(2))*(Math.sqrt(-2*x**2 + Math.sqrt(8*x**2 + 1) - 1))

    position = [x ,y]
    return position
}



function func_inf_pos(x){

    y = (0.5)*(Math.sqrt(2))*(Math.sqrt(-2*x**2 + Math.sqrt(8*x**2 + 1) - 1))
    
    position = [x , y]
    return position
}



//---------------------------------EIGHT-------------------------------

function func_eit_neg_in(x){
    y = (-0.5)*(Math.sqrt(2))*(Math.sqrt(-2*x**2 - Math.sqrt((-8)*x**2 + 1) + 1))

    position = [x ,y]
    return position

}

function func_eit_neg_out(x){
    y = (-0.5)*(Math.sqrt(2))*(Math.sqrt(-2*x**2 + Math.sqrt((-8)*x**2 + 1) + 1))

    position = [x ,y]
    return position

}

function func_eit_pos_inn(x){
    y = (0.5)*(Math.sqrt(2))*(Math.sqrt(-2*x**2 - Math.sqrt((-8)*x**2 + 1) + 1))

    position = [x ,y]
    return position

}

function func_eit_pos_out(x){
    y = (0.5)*(Math.sqrt(2))*(Math.sqrt(-2*x**2 + Math.sqrt((-8)*x**2 + 1) + 1))

    position = [x ,y]
    return position

}


//---------------------------------LOOP-----------------------

// function loop(){
//     for (let i = 0; i<=1; i+= 0.1){

// }

// for (let i = 0; i<=1; i+= 0.1){
    
   
//     console.log('\n\n',i)
//     console.log('x, y=', func_inf_pos(i.toFixed(1)) )

//     console.log('x, y=', func_inf_neg(i.toFixed(1)) )




// }


for (let i = -0.35; i<=0.354; i+= 0.1){
   
    console.log('\n\n',i)

    // console.log('x, y=', func_eit_neg_in(i.toFixed(1)) )

    // console.log('x, y=', func_eit_neg_out(i.toFixed(1)) )

    console.log('x, y=', func_eit_pos_inn(i.toFixed(1)) )

    // console.log('x, y=', func_eit_pos_out(i.toFixed(1)) )


}