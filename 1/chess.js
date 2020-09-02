//variable to set border size
let n    = 8;
let symb = '#';
let str1 = '',str2 = '';

for(let i = 0; i < n; i++){
    if(i % 2 == 0){
        str1+= symb;
        str2+= ' ';
    }else{
        str2+= symb;
        str1+= ' ';        
    }
}

for(let i = 0; i < n; i++){
    i % 2 ==0 ? console.log(str1):console.log(str2)      
}
