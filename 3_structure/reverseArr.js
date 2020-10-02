let reverse = (arr) => {
    let newArr = []
    for(let i= 0; i< arr.length;i++){
          newArr[i] = arr[arr.length - i -1];
    }

    return newArr;
}

let reverseArrayInPlace = (arr) =>{
    let tmp;
    for(let i= 0; i< arr.length;i++){
        tmp = arr[i];
        arr[i] = arr[arr.length - i -1];
        arr[arr.length - i -1] = tmp;
    }

    return 
}

let test = [1,2,3];
console.log(reverseArrayInPlace(test));