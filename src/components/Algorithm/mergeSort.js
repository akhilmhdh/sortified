export const mergeSort=(update,swap,list,middle)=>{
    if (list.length <= 1) {
        return list;
      }
      // In order to divide the array in half, we need to figure out the middle
      const mid = Math.floor(list.length / 2);
      const leftie=middle-Math.floor(middle/2);
      const rightie=middle+Math.floor(middle/2)
      // This is where we will be dividing the array into left and right
      const left = list.slice(0, mid);
      const right = list.slice(mid);
    
      // Using recursion to combine the left and right
      return merge(
        mergeSort(update,swap,left,leftie), mergeSort(update,swap,right,rightie),middle,update,swap
      );
}

function merge (left, right,middle,update,swap) {
    let resultArray = [], leftIndex = 0, rightIndex = 0;
    let posLeftInList = Math.floor(middle - left.length);
    let posRightInList = middle;
    let posInList = Math.floor(middle - left.length)
    // We will concatenate values into the resultArray in order
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        resultArray.push(left[leftIndex]);
        posLeftInList+=leftIndex
        swap(posLeftInList,posInList);
        leftIndex++; // move left array cursor
        console.log(left,right)
        console.log("Inside Loop if",posLeftInList,posRightInList,posInList,left.length,right.length)
      } else {
        resultArray.push(right[rightIndex]);
        posRightInList+=rightIndex;
        swap(posRightInList,posInList)
        rightIndex++; // move right array cursor
        console.log(left,right)
        console.log("Inside Loop else",posLeftInList,posRightInList,posInList,left.length,right.length)
      }
      posInList++
      console.log(resultArray)
    }
    if(right.slice(leftIndex).length>0) {swap(posRightInList,posInList);posInList++;}
    else if(left.slice(leftIndex).length>0) {swap(posLeftInList,posInList);posInList++;}
    console.log(posLeftInList,posRightInList,posInList,left.length,right.length)
    // We need to concat here because there will be one element remaining
    // from either left OR the right
    return resultArray
            .concat(left.slice(leftIndex))
            .concat(right.slice(rightIndex));
  }