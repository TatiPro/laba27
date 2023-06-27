var breadSlices =prompt("Введите количество ломтиков хлеба:");
var cheeseSlices = prompt("Введите количество ломтиков сыра:");
breadSlices = parseInt(breadSlices);
cheeseSlices = parseInt(cheeseSlices);


function countMaxSandwiches(breadSlices,cheeseSlices){
    let MaxSandwiches = Max.min(Math.floor(breadSlices/2),cheeseSlices);
    return MaxSandwiches;  

}
alert("countMaxSandwiches(bread:" + breadSlices + ",cheese:" + cheeseSlices + ") ->" + MaxSandwiches);
