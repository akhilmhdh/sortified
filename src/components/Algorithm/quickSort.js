let list;
export const quickSortHelper =(update,swap,arr,left,right)=>{
    list=arr;
    quickSort(update,swap,left,right)
    return list
}

const quickSort=(update,swap,left,right)=>{
    let index;
    if(list.length>1){
        left=typeof left!=="number"?0:left;
        right=typeof right!=="number"?list.length-1:right;
        update(left,right)
        index=partition(update,swap,left,right);

        if(left<index -1){
            quickSort(update,swap,left,index-1)
        }
        if(index<right){
            quickSort(update,swap,index,right)
        }
    }
};

const partition =(update,swap,left,right)=>{
    let pivot=list[Math.floor((right +left )/2)],i=left,j=right;
    while(i<=j){
        update(pivot,i,j)
        while(list[i]<pivot){
            i++;
            update(pivot,i,j)
        }
        while(list[j]>pivot){
            j--;
            update(pivot,i,j)
        }
        if(i<=j){
            [list[i],list[j]]=[list[j],list[i]]
            swap(i,j)
            i++;
            j--;
            update(pivot,i,j)
        }
    }
    return i;
}