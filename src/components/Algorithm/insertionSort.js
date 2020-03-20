export const insertionSort=(update,swap,list)=>{
    let i,j=0;
    for(i=0;i<list.length;i++){
        for(j=0;j<i;j++){
            if (list[i]<list[j]) {
                [list[i],list[j]]=[list[j],list[i]];
                swap(i,j);
                }
            update(i,j);
            }
        update(i,j);
    }
    return(list)
}