### Part 1a
1) `values added:  20`
2) `final result:  20`
3) `values added:  20`
4) An error is thrown, because `result` was declared within the `if` block and we tried to access it outside of that `if` block.
5) An error is thrown, because we are trying to reassign a `const` variable.
6) This would try an error if got run, because because `result` was declared within the `if` block and we tried to access it outside of that `if` block.

### Part 1b
1) `3` gets printed. Since `i` was declared within the `discountPrices` function as a `var`, we can access its value anywhere within the function. Its value is just the length of the `prices`.
2) `150` gets printed. Since `discountedPrice` was declared within the `discountPrices` function as a `var`, we can access its value anywhere within the function. Its value is equal to the last value in `prices`, which is 300, multiplied by 0.5, which equals 150.
3) `150` gets printed. Since `finalPrice` was declared within the `discountPrices` function as a `var`, we can access its value anywhere within the function. Its value is equal to 150 multiplied by 100, which then gets rounded to the nearest integer, and then divided by 100.
4) It returns the array `[50, 100, 150]`. Since `discounted` was declared within the `discountPrices` function as a `var`, we can access its value anywhere within the function. We multiply each value in `prices` by 0.5, do some rounding, so that the value can only have 2 decimal places, and then push that value to discounted (i.e. when we return discounted, we return the array `prices`, where each value is halved).
5) An error is thrown, because `i` was declared within the `for` block as a `let` and we tried to access it outside of that `for` block.
6) An error is thrown, because `discountedPrice` was declared within the `for` block as a `let` and we tried to access it outside of that `for` block.
7) `150` gets printed. Since `finalPrice` was declared within the `discountPrices` function/block as a `let`, we can access its value anywhere within the function/block. Its value is equal to 150 multiplied by 100, which then gets rounded to the nearest integer, and then divided by 100.
8) It returns the array `[50, 100, 150]`. Since `discounted` was declared within the `discountPrices` function/block as a `let`, we can access its value anywhere within the function/block. We multiply each value in `prices` by 0.5, do some rounding, so that the value can only have 2 decimal places, and then push that value to discounted (i.e. when we return discounted, we return the array `prices`, where each value is halved).
9) An error is thrown, because `i` was declared within the `for` block as a `let` and we tried to access it outside of that `for` block.
10) `3` gets printed. Since `length` was declared as a `const` within the `discountedPrices` function/block, we can access its value anywhere within the block.
11) It returns the array `[50, 100, 150]`. Since `discounted` was declared within the `discountPrices` function/block as a `const`, we can access its value anywhere within the function/block. We multiply each value in `prices` by 0.5, and then push that value to discounted (i.e. when we return discounted, we return the array `prices`, where each value is halved).
12a) student['name']
12b) student['Grad Year']

