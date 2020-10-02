function countBs(elem){
    let count =0;
for(let i = 0; i < elem.length;i++){
     if(elem.charAt(i) === 'B'){
         count++;
     }
}
    return count;
}

console.log(countBs('asasBB'))
