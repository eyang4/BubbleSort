function split(wholeArray) {
    const halfLength = Math.ceil(wholeArray.length/2)
    const firstHalf = wholeArray.slice(0, halfLength)
    const backHalf = wholeArray.slice(halfLength)
    return [firstHalf, backHalf]
}

function merge(arr1, arr2) {
    let returnArray = [];
    let firstIndex = 0;
    let secondIndex = 0;
    while (firstIndex < arr1.length || secondIndex < arr2.length) {
        if (arr1[firstIndex] < arr2[secondIndex]) {
            returnArray.push(arr1[firstIndex])
            firstIndex++
        }
        else if (arr1[firstIndex] > arr2[secondIndex]) {
            returnArray.push(arr2[secondIndex])
            secondIndex++
        }
        else if (firstIndex >= arr1.length) {
            returnArray.push(arr2[secondIndex])
            secondIndex++
        }
        else if (secondIndex >= arr2.length) {
            returnArray.push(arr1[firstIndex])
            firstIndex++
        }
    }
    return returnArray
}