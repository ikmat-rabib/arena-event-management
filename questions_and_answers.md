<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B: `ReferenceError: greetign is not defined`

<i>here, greeting is declared but it does not have any value. on the other hand an object is assigned to greetign which is not declared in the code. so there is a reference error in the code and the console log will return "undefined"  </i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C: `"12"`

<i>In this function it will return the sum of a and b. here a=1 is declared as a number value and b="2" is declared as a string value. as JS dynamically performs type correction while running, it will concatenate the value of a and b in this function as here we have 2 different type values</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A: `['🍕', '🍫', '🥑', '🍔']`

<i>here, food is assigned with an array ["🍕", "🍫", "🥑", "🍔"]. later it was modified by info.favoriteFood which value is assigned as "🍝". modifying the info object's property will not modify the original array it was initially assigned from.</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function B: `Hi there, undefined` {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B: `Hi there, undefined`

<i>when the B: `Hi there, undefined` function is called, no value is passed/assigned into console.log(sayHi()). so it will return "Hi there," with no value as undefined</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C: 3

<i>the count is initialized as 0 and if the condition is true it will increment +1 for each loop. now the nums array has 4 value and because of the forEach method it will check if the condition(num) is true. here for the first run, the condition (num) = 0, so the it will not execute the increment. but the condition is truth for the other values of the array [nums] so it will execute the function total 3 times and will return the value 3 as the result</i>

</p>
</details>
