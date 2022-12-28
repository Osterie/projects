
//Testing


//TODO: remove 0 and 5 then 7

var list1 = [0, 1, 2, '3', 4, 5, 6, 7];
var remove = ['0', '7', 3, '4']
remove.sort()

console.log(remove)

NTR = 0

for (let i = 0; i < remove.length; i++) {
    NTR = remove[i]
    list1.splice(NTR , 1)
    console.log(list1)
    
}

console.log(list1)


//first item
//0

list1.splice(NTR , 1)
console.log(list1)


//fifth item - first item
//5-1

NTR = 5-1

list1.splice(NTR ,1)
console.log(list1)

//fourthitem - thirditem - first item
//fourthitem-thirditem

NTR = 7-2

list1.splice(NTR,1)
console.log(list1)