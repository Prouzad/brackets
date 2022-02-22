module.exports = function check(str, bracketsConfig) {
 module.exports = function check(str, bracketsConfig) {

  let obj = {};
  let arr = [];
  let stack = [];

  for (let j = 0; j < bracketsConfig.length; j++) {
    obj[`${bracketsConfig[j][1]}`] = bracketsConfig[j][0];
    arr.push(bracketsConfig[j][0]);
  }

  //STR

  for (let i = 0; i < str.length; i++) {
    let currenS = str[i];

    if(arr.includes(currenS) && obj[currenS] != currenS){
      stack.push(currenS)
    }else if(obj[currenS] == currenS && stack.length === 0){
      stack.push(currenS)
    }else if((obj[currenS] == currenS && stack[stack.length-1] !== currenS)){
      stack.push(currenS)
    }else{
      let l = stack[stack.length -1];
      if(l == obj[currenS]){
        stack.pop()
      }else if(stack.length == 0){
        return false;
      }else{
        return false;
      }
    }
} 
  return stack.length === 0;
};




}
