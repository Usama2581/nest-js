// --------------------------- minimum and maximum-----------------------------------

const arr = [1,2,3,4,5,6,-7,8,9]

let max = arr[0]
let min = arr[0]
let i, secondMax = Infinity, secondMin = Infinity

// ----------MAX-----------------

for (i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        secondMax = max
        max = arr[i]
    }
    else if (arr[i] < secondMax) {  
        secondMax = arr[i]
    }
}

//----------MIN-------------

for (i = 0; i < arr.length; i++) {
    if(arr[i] < min){
        secondMin = min
        min = arr[i]
    }
    else if (arr[i] > secondMin) {
        arr[i] = secondMin
    }
}
// console.log('maximum')
// console.log(max)
// console.log(secondMax)
// console.log('minimun')
// console.log(min)
// console.log(secondMin)


//---------------Fabonacci-------------------------

let a = 0
let b = 1


for (let i=0; i<9; i++) {
      console.log(a)
      let temp = a + b
      a = b
      b = temp
}

