// Question 1
console.log("Question 1");
function calculate(min, max, step) {
	let result = 0;
	for (let i = min; i <= max; i += step) {
		result += i;
	}
	console.log(result);
}

calculate(1, 3, 1); // 你的程式要能夠計算 1+2+3，最後印出 6
calculate(4, 8, 2); // 你的程式要能夠計算 4+6+8，最後印出 18
calculate(-1, 2, 2); // 你的程式要能夠計算 -1+1，最後印出 0
console.log("=================================");
// Question 2
console.log("Question 2");
function avg(data) {
	let test = data.employees;
	let add = 0;
	let count = 0;

	test.map((item) => {
		if (item.manager == false) {
			add += item.salary;
			count++;
		}

		return count, add;
	});

	console.log(add / count);

	// 請用你的程式補完這個函式的區塊
}

avg({
	employees: [
		{
			name: "John",
			salary: 30000,
			manager: false,
		},
		{
			name: "Bob",
			salary: 60000,
			manager: true,
		},
		{
			name: "Jenny",
			salary: 50000,
			manager: false,
		},
		{
			name: "Tony",
			salary: 40000,
			manager: false,
		},
	],
}); // 呼叫 avg 函式

console.log("=================================");
// Question 3
console.log("Question 3");
function func(a) {
	let x = a;
	function funcTwe(b, c) {
		console.log(a + b * c);
	}
	return funcTwe;
}

func(2)(3, 4); // 你補完的函式能印出 2+(3*4) 的結果 14
func(5)(1, -5); // 你補完的函式能印出 5+(1*-5) 的結果 0
func(-3)(2, 9); // 你補完的函式能印出 -3+(2*9) 的結果 15
// 一般形式為 func(a)(b, c) 要印出 a+(b*c) 的結果

console.log("=================================");
// Question 4
console.log("Question 4");
function maxProduct(nums) {
	let maxNumber = -Infinity;
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			let totalItem = nums[j] * nums[i];
			if (totalItem > maxNumber) {
				maxNumber = totalItem;
			}
		}
	}
	console.log(maxNumber);
	// 請用你的程式補完這個函式的區塊
}
maxProduct([5, 20, 2, 6]); // 得到 120
maxProduct([10, -20, 0, 3]); // 得到 30
maxProduct([10, -20, 0, -3]); // 得到 60
maxProduct([-1, 2]); // 得到 -2
maxProduct([-1, 0, 2]); // 得到 0 或 -0
maxProduct([5, -1, -2, 0]); // 得到 2
maxProduct([-5, -2]); // 得到 10

console.log("=================================");
// Question 5
console.log("Question 5");
function twoSum(nums, target) {
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[j] + nums[i] == target) {
				let result = [];
				result.push(nums.indexOf(nums[i]), nums.indexOf(nums[j]));
				return result;
			}
		}
		// your code here
	}
}
let result = twoSum([2, 11, 7, 15], 9);
console.log(result); // show [0, 2] because nums[0]+nums[2] is 9

console.log("=================================");
// Question 6
console.log("Question 6");
function maxZeros(nums) {
	let total = 0;
	for (let i = 0; i < nums.length; i++) {
		let findNumber = 0;
		for (let j = i; j < nums.length; j++) {
			if (nums[j] == 0) {
				findNumber++;
			} else {
				break;
			}
			if (findNumber > total) {
				total = findNumber;
			}
		}
	}
	console.log(total);
	// 請用你的程式補完這個函式的區塊
}

maxZeros([0, 1, 0, 0]); // 得到 2
maxZeros([1, 0, 0, 0, 0, 1, 0, 1, 0, 0]); // 得到 4
maxZeros([1, 1, 1, 1, 1]); // 得到 0
maxZeros([0, 0, 0, 1, 1]); // 得到 3
