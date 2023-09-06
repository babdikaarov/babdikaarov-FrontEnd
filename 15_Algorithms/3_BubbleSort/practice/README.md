# Intro to Bubble Sort

Preparing for interviews will require you to become comfortable with implementing and discussing various algorithms. In particular, sorting algorithms, or algorithms that order elements in an array in a particular way, can be a popular topic. One example of a sorting algorithm is bubble sort.

The bubble sort algorithm takes an array of elements and reorders the elements of the input from smallest to largest. To achieve this, bubble sort works by comparing a pair of neighboring elements and swapping their positions in the array so that the larger of the two elements is always on the right. Doing this continuously results in the largest element “bubbling” up to the end of the array, giving this sort its name. The algorithm only stops when there are no more values that need to be swapped.

Below is a quick pseudocode example of what we will create in this lesson:

```
while array is not sorted
  for each value in array
    if current value > next value
      swap current value and next value

return array
```

Bubble sort is not the most efficient sorting algorithm. Bubble sort’s worst-case runtime is O(n^2). This is because we have to compare the current element we are looking at, to each element in the array after it and repeat this check for every single element in the array. Its best-case runtime is O(n) for an already-sorted list.

![BubbleSort_Avg_case](./BubbleSort_Avg_case.gif)
![BubbleSort_worst_case](./BubbleSort_worst_case.gif)

## Loops

In order to sort an array, we’ll need to visit pairs of elements and check if they should be moved or kept at their current index. To accomplish this we’ll use two loops:

One loop that will execute an inner loop depending on the state of a variable representing whether the input array might be sorted or not
An inner loop to compare and swap pairs of elements in the array

## Swap

An essential part of bubble sort is the “swapping” of pairs of unsorted elements.

To swap pairs of elements, we’ll need to store one of the values at either index in a temporary variable so we can use it later. For example, doing something like this:

```
currentValue = nextValue;
nextValue = currentValue;
```

would not work because we’d “lose” one of the values. The original value of currentValue would be overwritten and there would be no reference to it. Using the temporary variable strategy seen in the GIF above avoids the loss of any of the values whose position we need to exchange.

We’ll employ this strategy to finish building out swap().

## Compare

We have a loop to run our algorithm, and another that visits each element in the input array but if we were to run this as is, it would only iterate through the array once.

Let’s add some additional logic to our code in the bubbleSort.js file that will compare neighboring elements and swap them if necessary. For this exercise, you’ll only be adding code inside of the for loop of bubbleSort().
