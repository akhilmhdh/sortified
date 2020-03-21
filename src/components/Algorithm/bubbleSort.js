export const bubbleSort=(update,swap,list)=>{
    let len = list.length,i=0, j=0, stop;
    update(i,j)
for (i=0; i < len; i++){
    for (j=0, stop=len-i; j < stop; j++){
        if (list[j] > list[j+1]){
            [list[j],list[j+1]]=[list[j+1],list[j]]
            swap(j, j+1);
        }
        update(i,j);
    }
    update(i,j-1);
}

return list;
}