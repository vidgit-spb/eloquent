    let sum = (arr) =>{
        let sum = arr.reduce(function(a, b) { return a + b; }, 0);

         return sum;
    };
    

    let range = (a,b)=>{
        let arr = [];
        for(let i = 0; i < b - a + 1; i++){
            arr[i] = i + a;
        }
        console.log(arr)
        return arr;
    }

    console.log(sum(range(1,10)));