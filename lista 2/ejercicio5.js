let array = [1,1,1,1,1,2,2,2,2,2,3,3,3,3,3];

const miSet = new Set();

for(let i = 0; i < array.length; i++){
    miSet.add(array[i]);
}

for(let i of miSet){
    console.log(i);
}