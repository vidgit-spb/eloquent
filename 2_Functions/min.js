 min = (a,b)=>{
     let min = 0;
     (a < b)? min = a:min = b;
  return min;
}

console.log(min(1,101));

console.log(min(0, -10));