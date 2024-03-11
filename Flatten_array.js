//js

let data = [1,2,[3,4,[5,[6],[7]]],[8],9,[10,[11,12]]];


function flattenArray(arr){
  return arr.reduce((acc,curr)=>{
    if(Array.isArray(curr)){
      let tmp_array = flattenArray(curr);
      acc = acc.concat(tmp_array);
    }else{
      acc.push(curr);
    }
    
    return acc;
  },[]);
}

console.log(flattenArray(data));
