const input = {
    ' ':[5],
    d  :[10],
    e  :[1],
    H  : [0],
    l  : [2,3,9],
    o  :  [4,7],
    r  :[8],
    w  :[6]
}

// String.prototype.replaceAt = function(index, replacement) {
//     return this.substr(0, index) + replacement + this.substr(index + replacement.length);
// }

const buildString =(m)=>{

    let arrRet = [];
    for(let key in m){
        for(let keyItem in m[key]){
            arrRet[m[key][keyItem]] = key;
        }
    }
    return arrRet;
};


console.log(buildString(input).join(''));