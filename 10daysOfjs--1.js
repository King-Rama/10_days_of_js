// day 1

// const getArea = (width, height) => {
//     return width * height;
// }
//
// const getPerimeter = (width, height) => {
//     return 2 * (width + height);
// }
//
//
// console.log(getArea(3,4.5));
// console.log(getPerimeter(3,4.5));

//
// const vowelsAndConsonants = (s) => {
//     let vowels = 'aeiou';
//     for (let i in s){
//         if (vowels.includes(s[i])){
//             console.log(s[i]);
//         }
//     }
//     for (let i in s){
//         if (!vowels.includes(s[i])){
//             console.log(s[i]);
//         }
//     }
// }
//
// console.log(vowelsAndConsonants('javascriptloops'));

//
// const factorial = (n) => {
//     if (n === 1){
//         return 1;
//     }
//     return n * factorial(n-1);
// }
//
// console.log(factorial(4));

//
// let r = readLine();
// const PI = Math.PI;
//
// // Print the area of the circle:
// console.log(PI*r*r);
// // Print the perimeter of the circle:
// console.log(PI*2*r);

//
// const gradeScore = (score) => {
//     if (score > 25 && score <= 30){
//         return 'A';
//     }
//     if (score > 20 && score <= 25){
//         return 'B';
//     }
//     if (score > 15 && score <= 20){
//         return 'C';
//     }
//     if (score > 10 && score <= 15){
//         return 'D';
//     }
//     if (score > 5 && score <= 10){
//         return 'E';
//     }
//     if (score > 0 && score <= 5){
//         return 'F';
//     }
// }


// console.log(gradeScore(11));

// function getLetter(s) {
//     let letter;
//     switch (s[0]) {
//         case 'aeiou':
//             letter = 'A';
//             break;
//         case 'bcdfg':
//             letter = 'B';
//             break;
//         case 'hjklm':
//             letter = 'C';
//             break;
//         case 'npqrstvwxyz':
//             letter = 'D';
//             break;
//         default:
//             letter = 'F';
//     }
//     return letter;
//
// }

// console.log('adfgt'.includes('a'))

// function getSecondLargest(nums) {
//
//     let numbers = nums.sort((a,b) => a+b);
//     let set_arr = new Set(numbers);
//     let arr = Array.from(set_arr);
//     let ans = (arr.sort((a,b) => a-b).reverse());
//     return ans[1];
// }
//
// console.log(getSecondLargest([10, 9, 9, 8, 8, 11, 8, 0, 9, 1]))


// function reverseString(s) {
//     try {
//         let arr = s.split('');
//         let ans = [];
//         for (let i = arr.length-1; i >= 0; i--){
//             ans.push(arr[i]);
//         }
//         return ans.join('');
//     }
//     catch (e){
//         console.log(e.message);
//         console.log(s);
//     }
//
// }
//
// console.log(reverseString('hello'));
// console.log(reverseString('4567'));
// console.log(reverseString(4567));


// function Rectangle(length, width) {
//     this.length = length;
//     this.width = width;
//     this.perimeter = (length + width) * 2;
//     this.area = length * width;
// }
//
// const rec = new Rectangle(10, 20);
// console.log(rec.length);
// console.log(rec.width);
// console.log(rec.perimeter);
// console.log(rec.area);

const o = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
};

console.log('property: value');
// 'p' is the property
for (p in o) {
    console.log(p + ': ' + o[p]);
}