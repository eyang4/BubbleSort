describe("Bubble Sort", function() {
  it("handles an empty array", function() {
    expect(bubbleSort([])).toEqual([]);
  });
  it("sorts the array of nums from smallest to largest", function() {
    expect(bubbleSort([4, 3, 2, 1])).toEqual([1, 2, 3, 4]);
  });
});
