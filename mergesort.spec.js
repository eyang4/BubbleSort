describe("Split", function() {
    it('splits a length-two array', function() {
        expect(split([1,1])).toEqual([[1],[1]])
    })
    it("returns the array as two halves", function() {
        expect(split([3,4,1,2])).toEqual([[3,4], [1,2]])
    })
    it("returns odd numbered array with the left array larger", function() {
        expect(split([1,2,3])).toEqual([[1,2], [3]])
    })
});

describe('Merge', function() {
    it('turns two arrays into one sorted array', function() {
        expect(merge([1,2,3], [4,5,6])).toEqual([1,2,3,4,5,6])
        expect(merge([1,2,4], [3,5,6])).toEqual([1,2,3,4,5,6])
    })
    it('turns asymetrical arrays into a sorted array', function() {
        expect(merge([2,3,4], [1,5])).toEqual([1,2,3,4,5])
    })
})

describe("Merge Sort", function() {
    it("handles an empty array", function() {
      expect(mergeSort([])).toEqual([]);
    });
    it("sorts the array of nums from smallest to largest", function() {
      expect(mergeSort([4, 3, 2, 1])).toEqual([1, 2, 3, 4]);
    });
  });