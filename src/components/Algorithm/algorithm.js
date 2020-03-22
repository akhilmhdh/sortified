import {insertionSort} from './insertionSort'
import {bubbleSort} from './bubbleSort'
import {quickSortHelper} from './quickSort'
import {heapSort} from './heapSort'
import { mergeSortHelper } from './mergeSort'

export const Algorithm=(name,list)=>{
    let logs=[]
    console.log(name)
    const update=(...el)=>{logs=[...logs,{operation:'update',elements:el}]}
    const swap=(pos,tar)=>{logs=[...logs,{operation:'swap',elements:[pos,tar]}]}
    const changeEl=(pos,value)=>{logs=[...logs,{operation:'change',elements:[pos,value]}]}
    switch(name){
        case "Insertion Sort":
            list=insertionSort(update,swap,list);
            break;
        case "Bubble Sort":
            list=bubbleSort(update,swap,list);
            break;
        case "Heap Sort":
            list=heapSort(update,swap,list);
            break;
        case "Merge Sort":
            list=mergeSortHelper(update,swap,changeEl,list,0,list.length-1);
            break;
        case "Quick Sort":
            console.log(quickSortHelper(update,swap,list,0,list.length-1))
            break;
        default:
            list=insertionSort(update,swap,list);
    }
    logs=[...logs,{operation:'sorted',elements:"all"}]
    return([logs,list]);
}
