# Θ(1): Constant time complexity. The algorithm's running time is constant and does not depend on the input size. This is the fastest possible runtime

**Scenario**: You have an array of numbers, and you want to retrieve the first element of this array.

**Algorithm**:

```python
def get_first_element(arr):
    if len(arr) > 0:
        return arr[0]
    else:
        return "Array is empty"
```

Now, let's analyze this algorithm step by step:

1. You receive an array, `arr`, as input.
2. The algorithm checks if the length of the array, `len(arr)`, is greater than 0.
3. If the length of the array is greater than 0 (meaning it's not empty), the algorithm retrieves the first element, `arr[0]`, and returns it.
4. If the array is empty (length is 0), the algorithm returns the message "Array is empty."

**Analysis**:

- Regardless of the size of the input array, this algorithm performs a constant number of operations: checking the length of the array and retrieving the first element.
- The number of operations doesn't depend on the size of the input array; it's always the same.
- Thus, this algorithm has a constant time complexity, O(1).

**Trial and Error Verification**:

You can try this algorithm with different array sizes (empty, small, large), and you'll notice that the time it takes to retrieve the first element remains constant, demonstrating its O(1) time complexity.

## Θ(log N): Logarithmic time complexity. The running time grows logarithmically with the input size. Algorithms with log N complexity are notably efficient for large datasets

**Scenario**: You have a sorted list of numbers, and you want to perform a binary search to find a specific target number in the list.

**Algorithm**:

```javascript
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;  // Target found
        } else if (arr[mid] < target) {
            left = mid + 1;  // Adjust the left bound
        } else {
            right = mid - 1;  // Adjust the right bound
        }
    }
    
    return -1;  // Target not found
}
```

Now, let's analyze this algorithm step by step:

1. You receive a sorted array, `arr`, and a target number, `target`, as input.

2. The algorithm initializes two pointers, `left` and `right`, to the first and last indices of the array.

3. It enters a `while` loop as long as `left` is less than or equal to `right`.

4. Inside the loop, it calculates the middle index, `mid`, between `left` and `right`.

5. It compares the element at `arr[mid]` with the target:
   - If they are equal, it returns the index `mid`, indicating the target is found.
   - If `arr[mid]` is less than the target, it adjusts the `left` bound to `mid + 1` to search in the right half of the array.
   - If `arr[mid]` is greater than the target, it adjusts the `right` bound to `mid - 1` to search in the left half of the array.

6. If the loop finishes without finding the target, it returns -1 to indicate that the target is not in the array.

**Analysis**:

- In each iteration of the `while` loop, the algorithm effectively divides the search space in half.

- The number of iterations required to find the target depends on the size of the input array, N, and is proportional to log₂(N).

- Therefore, this algorithm has a logarithmic time complexity, Θ(log N).

**Trial and Error Verification**:

You can try this algorithm with different sorted lists of numbers and different target values. You'll observe that the number of iterations required to find the target increases slowly as the size of the input list (N) increases, confirming its logarithmic time complexity.

We want to find log₂(22), which means we're looking for the exponent to which 2 must be raised to get 22.

Start with N = 22 and a base of 2.

We want to find x in the equation: 2^x = 22.

Start by trying different values of x:

If x = 1, then 2^1 = 2, which is too small.
If x = 2, then 2^2 = 4, still too small.
If x = 3, then 2^3 = 8, still too small.
If x = 4, then 2^4 = 16, still too small.
If x = 5, then 2^5 = 32, which is too large.
So, we know that x is between 4 and 5, but we need a more accurate estimate.

To refine our estimate, let's try a value between 4 and 5. We'll use x = 4.5.

If x = 4.5, then 2^4.5 ≈ 22.627. This is too large.
Now, we know that x is between 4 and 4.5.

Let's further refine our estimate. We'll try x = 4.25.

If x = 4.25, then 2^4.25 ≈ 19.495. This is still too small.
So, x is between 4.25 and 4.5.

Keep refining: Let's try x = 4.375.

If x = 4.375, then 2^4.375 ≈ 20.996. This is getting closer.
Continue this process of trying values between 4.25 and 4.375 until you get a closer estimate. You can keep using this approach with more decimal places until you reach the desired level of accuracy.

This manual calculation method is essentially a trial-and-error approach where you narrow down the range in which the exponent x lies by trying different values within that range until you get a close approximation.

## Θ(N): Linear time complexity. The running time grows linearly with the input size. It means that as the input size increases, the running time increases proportionally

**Scenario**: You have an array of integers, and you want to find the sum of all the integers in the array.

**Algorithm**:

```javascript
function findSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
```

Now, let's analyze this algorithm step by step:

1. You receive an array of integers, `arr`, as input.
2. The algorithm initializes a variable `sum` to 0 to store the sum of integers.
3. It enters a `for` loop that iterates from `i = 0` to `i < arr.length`.
4. Inside the loop, it adds each element `arr[i]` to the `sum`.
5. After processing all elements in the array, it returns the calculated sum.

**Analysis**:

- The algorithm iterates through each element in the array once, exactly N times, where N is the length of the input array.
- The number of iterations directly depends on the size of the input array, N.
- Therefore, this algorithm has a linear time complexity, Θ(N).

**Trial and Error Verification**:

You can try this algorithm with different arrays of integers, varying in size (N), and measure the time it takes to calculate the sum. You'll observe that the time taken increases linearly with the size of the input array, confirming its linear time complexity.

Absolutely, let's calculate the time complexity of an algorithm with linear time complexity, O(N), using basic mathematical examples where N is 22.

**Scenario**: Imagine you have a list of 22 unsorted numbers, and you're searching for a specific target number by checking each number in the list one by one.

**Algorithm**:

You perform a sequence of comparisons to find the target number:

1. Compare the first number in the list with the target.
2. If it's a match, you're done.
3. If it's not a match, move on to the second number.
4. Repeat this process until you either find the target or check all 22 numbers.

**Manual Calculation**:

Let's represent each comparison as a simple arithmetic operation:

- **Comparison 1**: You compare the first number with the target. This is 1 operation.
- **Comparison 2**: Now, you move to the second number. This is another operation.
- ...
- **Comparison 22**: Finally, you compare the 22nd number with the target. This is the 22nd operation.

In this case, you performed 22 comparisons (operations) in total because there are 22 numbers in the list.

**Mathematically**:

O(N) represents a linear relationship. It means the number of operations (comparisons in this case) scales linearly with the input size N.

So, if N is 22, you performed 22 comparisons. If N were 44, you'd perform 44 comparisons. The number of comparisons is directly proportional to the input size.

Therefore, the time complexity of this algorithm is O(N), where N represents the input size (in this case, the number of elements in the list), and it indicates that the algorithm's performance scales linearly with the input size.

## Θ(N log N): Linearithmic time complexity. This complexity is common in efficient sorting algorithms like Merge Sort and Quick Sort. It's faster than quadratic time but slower than linear and logarithmic time

**Scenario**: You have an array of integers, and you want to sort the array using the merge sort algorithm, which has a time complexity of Θ(N log N).

**Algorithm**:

```javascript
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}
```

Now, let's analyze this algorithm step by step:

1. You receive an array of integers, `arr`, as input.
2. The `mergeSort` function recursively divides the array into two halves until each subarray has only one or zero elements.
3. The `merge` function combines and sorts two sorted arrays into a single sorted array.
4. The merging process occurs in the `while` loop by comparing elements from the left and right subarrays and inserting them into the `result` array in sorted order.
5. Finally, the sorted array is returned.

**Analysis**:

- The `mergeSort` algorithm divides the array into halves in a way that each element is processed once.
- The merging process takes Θ(N) time since each element is compared exactly once.
- The total time complexity is Θ(N log N), as it takes Θ(log N) recursive calls to split the array and Θ(N) time to merge.

**Trial and Error Verification**:

You can try this algorithm with different arrays of integers, varying in size (N), and measure the time it takes to sort the array using merge sort. You'll observe that the time taken increases at a rate close to N log N with increasing input size, confirming its N log N time complexity.

**Scenario**: You have a list of 22 numbers, and you want to perform a sorting algorithm with a time complexity of O(N log N) to sort the numbers in ascending order.

**Manual Calculation**:

O(N log N) represents an algorithm with a time complexity that scales as N times the logarithm (base 2) of N.

1. Start with N = 22.
2. Calculate N log₂ N.

   N log₂ N = 22 log₂ 22

Now, let's calculate this value step by step:

- log₂ 22 ≈ 4.4594 (approximately)

Now, multiply this result by 22:

- 22 * 4.4594 ≈ 98.107

So, when N is 22, the value of N log₂ N is approximately 98.107.

**Interpretation**:

- This means that for an input size (N) of 22, the algorithm would roughly require around 98.107 units of work (comparisons or operations). It's important to note that this is a simplified calculation and doesn't represent the exact number of operations, but it gives you a sense of how the time complexity scales with the input size.

- As you increase the input size (N), the number of required operations will increase significantly but not as fast as N² (quadratic time) or 2^N (exponential time), which are higher time complexities.

- O(N log N) algorithms are efficient for larger input sizes compared to O(N²) or O(2^N), which become impractical quickly as the input size grows.

So, for N = 22, the time complexity of O(N log N) results in roughly 98.107 units of work.

## Θ(N^2): Quadratic time complexity. The running time grows with the square of the input size. This is slower than linear and linearithmic time complexities and can be inefficient for large datasets

**Scenario**: You have an array of integers, and you want to sort the array using the bubble sort algorithm, which has a time complexity of Θ(N^2).

**Algorithm**:

```javascript
function bubbleSort(arr) {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j + 1]
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
```

Now, let's analyze this algorithm step by step:

1. You receive an array of integers, `arr`, as input.
2. The `bubbleSort` function iterates through the array multiple times.
3. In each iteration, it compares adjacent elements in the array and swaps them if they are in the wrong order (e.g., if `arr[j]` is greater than `arr[j + 1]`).
4. The largest unsorted element "bubbles up" to its correct position in each pass.
5. The process repeats until the entire array is sorted.

**Analysis**:

- The `bubbleSort` algorithm has two nested loops: an outer loop that runs (N - 1) times and an inner loop that runs (N - i - 1) times, where `i` is the current iteration of the outer loop.
- In the worst case, when the array is sorted in reverse order, the inner loop performs the maximum number of comparisons and swaps.
- The time complexity is Θ(N^2) because it performs roughly N^2 comparisons and swaps in the worst case.

**Trial and Error Verification**:

You can try this algorithm with different arrays of integers, varying in size (N), and measure the time it takes to sort the array using bubble sort. As you increase the size of the input array, you'll observe that the time taken increases at a rate close to N^2, confirming its N^2 time complexity.

**Scenario**: You have a list of 22 numbers, and you want to perform a sorting algorithm with a time complexity of Θ(N^2) to sort the numbers in ascending order.

**Manual Calculation**:

Θ(N^2) represents an algorithm with a time complexity that scales quadratically with N.

1. Start with N = 22.
2. Calculate N^2.

   N^2 = 22^2 = 484

So, when N is 22, the value of N^2 is 484.

**Interpretation**:

- This means that for an input size (N) of 22, the algorithm would require approximately 484 units of work (comparisons or operations).

- Quadratic time complexity, as represented by Θ(N^2), implies that as you increase the input size (N), the number of required operations grows quadratically. In other words, if you double the input size, the number of operations roughly quadruples.

- Algorithms with quadratic time complexity are less efficient than linear (Θ(N log N)) or constant time (Θ(1)) algorithms, especially for larger input sizes.

So, for N = 22, the time complexity of Θ(N^2) results in approximately 484 units of work.

## Θ(2^N): Exponential time complexity. The running time grows exponentially with the input size. Algorithms with exponential complexity can become extremely slow for moderate to large inputs

**Scenario**: You have a problem that can be solved using recursive backtracking, and the algorithm's time complexity is Θ(2^N).

**Algorithm**:

```javascript
function recursiveBacktracking(n) {
    if (n <= 0) {
        return;
    }

    // Perform some operation

    // Recursively call the function with reduced input
    recursiveBacktracking(n - 1);

    // Recursively call the function with reduced input
    recursiveBacktracking(n - 1);
}
```

Now, let's analyze this algorithm step by step:

1. You have a problem with a parameter `n` that represents the size of the problem.
2. The `recursiveBacktracking` function uses recursive calls to solve the problem.
3. In each recursive call, the function performs some operation, which could be anything related to the problem.
4. The function makes two recursive calls, each with a reduced input size (`n - 1`).

**Analysis**:

- The `recursiveBacktracking` algorithm has a branching factor of 2, meaning that in each recursive call, it splits into two subproblems.
- The depth of the recursion tree is determined by the value of `n`.
- In total, there are 2^N function calls made in the worst case, where N is the initial value of `n`.
- Therefore, the time complexity of this algorithm is Θ(2^N).

**Trial and Error Verification**:

You can try this algorithm with different values of `n` and observe how the number of function calls grows exponentially with increasing `n`, confirming its exponential time complexity of Θ(2^N).

**Scenario**: You have an algorithm with a time complexity of Θ(2^N), and you want to understand how this time complexity scales when N is 22.

**Manual Calculation**:

Θ(2^N) represents an algorithm with exponential time complexity that grows very rapidly with N.

1. Start with N = 22.
2. Calculate 2^N.

   2^N = 2^22 ≈ 4,194,304

So, when N is 22, the value of 2^N is approximately 4,194,304.

**Interpretation**:

- This means that for an input size (N) of 22, the algorithm would require approximately 4,194,304 units of work (computations or iterations).

- Exponential time complexity, as represented by Θ(2^N), implies that the number of required operations grows exponentially with the input size. In simple terms, as N increases, the number of operations increases dramatically.

- Algorithms with exponential time complexity are highly inefficient for larger input sizes and can become impractical to use.

So, for N = 22, the time complexity of Θ(2^N) results in approximately 4,194,304 units of work, illustrating the rapid growth of this exponential time complexity as N increases.

## Θ(N!): Factorial time complexity. The running time grows with the factorial of the input size. This is the slowest common runtime and becomes impractical for all but very small inputs

**Scenario**: You have a problem that can be solved using a brute-force algorithm, and the algorithm's time complexity is Θ(N!).

**Algorithm**:

```javascript
function bruteForcePermutations(arr) {
    const result = [];

    function generatePermutations(current, remaining) {
        if (remaining.length === 0) {
            result.push([...current]);
            return;
        }

        for (let i = 0; i < remaining.length; i++) {
            const newCurrent = [...current, remaining[i]];
            const newRemaining = [...remaining.slice(0, i), ...remaining.slice(i + 1)];
            generatePermutations(newCurrent, newRemaining);
        }
    }

    generatePermutations([], arr);
    return result;
}
```

Now, let's analyze this algorithm step by step:

1. You have an array `arr` containing elements for which you want to generate all possible permutations.
2. The `bruteForcePermutations` function initializes an empty array `result` to store the permutations.
3. It defines an inner recursive function `generatePermutations` that takes two arguments: `current` (the current partial permutation) and `remaining` (the elements yet to be included in the permutation).
4. The base case of the recursion is when `remaining` is empty, which means you've generated a complete permutation. In this case, the permutation is added to the `result` array.
5. In the recursive case, the function iterates over the elements in `remaining`, adding each element to `current`, and recursively calling itself with the updated `current` and `remaining`, effectively generating all possible permutations.

**Analysis**:

- This algorithm generates all possible permutations of the input array.
- The number of permutations grows factorially with the size of the input array.
- Therefore, the time complexity of this algorithm is Θ(N!), where N is the size of the input array.

**Trial and Error Verification**:

You can try this algorithm with different input arrays of varying sizes (e.g., with 3, 4, or 5 elements) and observe that the number of generated permutations increases rapidly with the size of the input, confirming its factorial time complexity of Θ(N!).

**Scenario**: You have an algorithm with a time complexity of Θ(N!), and you want to understand how this time complexity scales when N is 22.

**Manual Calculation**:

Θ(N!) represents an algorithm with factorial time complexity. It grows extremely rapidly with N.

1. Start with N = 22.
2. Calculate N!.

   N! = 22! ≈ 1.124 * 10^21 (approximately)

So, when N is 22, the value of 22! is approximately 1.124 * 10^21.

**Interpretation**:

- This means that for an input size (N) of 22, the algorithm would require approximately 1.124 * 10^21 units of work (computations or iterations).

- Factorial time complexity, as represented by Θ(N!), is one of the most inefficient time complexities. It implies that the number of required operations grows at an astronomical rate with the input size.

- Algorithms with factorial time complexity are impractical for even moderately large input sizes.

So, for N = 22, the time complexity of Θ(N!) results in approximately 1.124 * 10^21 units of work, illustrating the extreme and impractical growth of this factorial time complexity as N increases.
