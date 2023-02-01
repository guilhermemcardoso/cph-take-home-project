# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here
I try to follow the idea that nested conditions are worse to understand when you trying to understand what a piece of code does. So, for me, the first steps to refactor the given code were to try to remove all the nested conditions.
I don't like to use "else" conditions as well, I always try to write my code with no "else" conditions. I think this kind of approach is good because the developer can easily see when some value is returned because of a specific condition.

I believe my version is more readable because it's easy to understand what happens when some conditions are achieved and it's easy to know when the code will run until the last line of the refactored function.
