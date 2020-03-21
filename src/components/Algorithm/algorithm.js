import {insertionSort} from './insertionSort'
import {bubbleSort} from './bubbleSort'
//import {mergeSort} from './mergeSort'
import {heapSort} from './heapSort'

export const Algorithm=(name,list)=>{
    let logs=[]
    console.log(name)
    const update=(...el)=>{logs=[...logs,{operation:'update',elements:el}]}
    const swap=(pos,tar)=>{logs=[...logs,{operation:'swap',elements:[pos,tar]}]}
    switch(name){
        case "Insertion Sort":
            list=insertionSort(update,swap,list);
            break;
        case "Bubble Sort":
            list=bubbleSort(update,swap,list);
            break;
        case "Merge Sort":
            console.log(heapSort(update,swap,list));
            break;
        default:
            list=insertionSort(update,swap,list);
    }
    return([logs,list]);
}
