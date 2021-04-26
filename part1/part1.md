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
12) A) student['name'];
12) B) student['Grad Year'];
12) C) student.greeting();
12) D) student["Favorite Teacher"]["name"];
12) E) student["courseLoad"][0];
13) A) '32' since integers map to their exact string representation.
13) B) 1 since '3' becomes a 3, because we are subtracting.
13) C) 3 since null has a numeric value of 0.
13) D) '3null' since null just maps to 'null'
13) E) 4 since true has a numeric value of 1
13) F) 0 because and false and null have numeric values equal to 0
13) G) '3undefined' because undefined just maps to 'undefined'
13) H) NaN because the numeric value of undefined is NaN
14) A) true because string 2 becomes the number 2
14) B) false because lexicographically, '2' > '1'
14) C) true because after type conversion, this is true (2 == 2)
14) D) false because without type conversion, the number 2 doesn't equal the string 2
14) E) false because the numeric value of true is 1, which isn't equal to 2
14) F) true because we type case the number 2 to true
15) == checks equality with type conversion. === checks equality without type conversion.