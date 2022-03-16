export type ArrType = number[]

export function SortArr(arr:ArrType){

    for (let i=0;i<arr.length;i++) {
        if(arr[i+1]<arr[i]) {
            let temp = arr[i+1]
            arr[i+1] = arr[i]
            arr[i]=temp
            i=-1
        }



    }

    return arr
}

