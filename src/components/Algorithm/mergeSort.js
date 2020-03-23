let list;
export const mergeSortHelper=(update,swap,changeEl,arr,l,r)=>{
  list=arr;
  MergeSort(update,swap,changeEl,l,r)
  return list
}

const MergeSort=(update,swap,changeEl,l,r)=>{
  if(l<r){
    const m=Math.floor(l+(r-l)/2)
    update(m,l,r)
    MergeSort(update,swap,changeEl,l,m);
    MergeSort(update,swap,changeEl,m+1,r);
    merge(update,swap,changeEl,l,m,r)
  }
}

const merge=(update,swap,changeEl,start,mid,end)=>{
  let start2=mid+1;
  if(list[mid]<=list[start2]) return;

  while(start<=mid && start2 <=end){
    if(list[start] <= list[start2]) {start++;update(start,mid,start2)}
    else{
      const value=list[start2];
      let index=start2;
      while(index!==start){
        list[index]=list[index-1];
        swap(index,index-1)
        index--;
        update(start,mid,index,start2)
      }
      list[start]=value;
      changeEl(start,value);
      start++;
      mid++;
      start2++
      update(start,mid,index,start2)
    }
  }
}