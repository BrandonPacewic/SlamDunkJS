const nums = '1 2';

let numbers = nums.split(' ');

for (let i = 0; i < numbers.length; i++) {
    numbers[i] = parseInt(numbers[i]);
}

console.log(numbers);
