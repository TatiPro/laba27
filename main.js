//Задача 1 
const items = {
    bread : 9,
    cheese: 7,
}

const countSandwiches = (availableItems) => {

    const bread = availableItems.bread/2;
    const cheese = availableItems.cheese ;
    const maxSandwich =  Math.floor(Math.min(bread , cheese));
    return maxSandwich

}

console.log(countSandwiches(items))

//Задача 2


const number = 5;
let brush = 0 ;
function multiplication(number) {
    columns = number
    rows = number
    if (brush === 0) {
        let result = [];
        for (let i = 0;  i <= rows; i++){
            if (i === 0) {
                result.push('#');
            } else{
                result.push(i);
            }
            
        }
        let myVar3 = result.join(' ')
        console.log(myVar3)
    }
    for (let i = 0;  i <= columns; i++){
        let result = [];
        if (i > 0) {
            result.push(i);
            for (let j=1;  j <= rows; j++){
                if (i * j !=0){
                    result.push(i * j);
                }
            }
            let myVar3 = result.join(' ')
            console.log(myVar3)
        }
        
    }
}
multiplication(number);