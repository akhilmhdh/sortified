import {insertionSort} from './insertionSort'

export const Algorithm=(name,list)=>{
    let logs=[]
    console.log(name)
    const update=(...el)=>{logs=[...logs,{operation:'update',elements:el}]}
    const swap=(pos,tar)=>{logs=[...logs,{operation:'swap',elements:[pos,tar]}]}
    list=insertionSort(update,swap,list)
    return([logs,list]);
}
