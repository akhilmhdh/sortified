let array_length 
export const heapSort=(update,swap,list)=>{
    array_length= list.length;

    for (var i = Math.floor(array_length / 2); i >= 0; i -= 1)      {
        heap_root(list, i,update,swap);
      }

    for (i = list.length - 1; i > 0; i--) {
        [list[0],list[i]]=[list[i],list[0]];
        update(0,i);
        swap(i,0);
        array_length--;
        heap_root(list, 0,update,swap);
    }

    return list;

}

function heap_root(input, i,update,swap) {
    var left = 2 * i + 1;
    var right = 2 * i + 2;
    var max = i;
    if (left < array_length && input[left] > input[max]) {
        max = left;
        
    }
    update(max,i);
    if (right < array_length && input[right] > input[max])     {
        max = right;
    }
    update(max,i);
    if (max !== i) {
        [input[max],input[i]]=[input[i],input[max]];
        swap(i,max);
        update(max,i);
        heap_root(input, max,update,swap);
    }
    update(max,i);
}