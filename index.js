function countSheep(num) {
  if (num === 0) {
    return;
  }
  console.log(num, "- Another sheep jump over the fence");
  return countSheep(num - 1);
}

// countSheep(3);

function double(arr) {
  if (!arr.length) {
    return [];
  }
  let dubNum = arr[0] * 2;
  return [dubNum, ...double(arr.slice(1))];
}

// console.log(double([1, 2, 3, 4, 5, 6, 7, 8]));

function reverseString(str) {
  if (!str.length) {
    return "";
  }
  let lastChar = str[str.length - 1];
  return lastChar + reverseString(str.slice(0, str.length - 1));
}

// console.log(reverseString('hello'));

function nthTriangleNumber(num) {
  if (num === 0) {
    return 0;
  }
  return num + nthTriangleNumber(num - 1);
}

// console.log(nthTriangleNumber(4))

function splitIt(str, funct) {
  if (!str.length) {
    return "";
  }
  if (funct(str[0])) {
    return " " + splitIt(str.slice(1), funct);
  }
  return str[0] + splitIt(str.slice(1), funct);
}

// console.log(splitIt('hello/dog', char => char === '/'));

// Binary one supposed to be here, we dont know binary lolol

function binaryRepresentation(num) {
  if (num <= 0) {
    return "";
  }
  const binary = Math.floor(num % 2);
  return binaryRepresentation(Math.floor(num / 2)) + binary;
}

// console.log(binaryRepresentation(25))

function factorialFunct(num) {
  if (num === 1) {
    return 1;
  }
  return num * factorialFunct(num - 1);
}

// console.log(factorialFunct(4));

function findFibo(num) {
  if (num === 0) {
    return "";
  }
  //   let count = 0;

  //   let start = 1 + count;

  //   return start + findFibo(num - 1, count);

  // console.log(num2[num2.length - 1], num2[num2.length - 2])
  // return [...num2, num2[num2.length - 1] + num2[num2.length - 2], ...findFibo(num, [...num2, num2[num2.length - 1] + num2[num2.length - 2]])];

  // let arr1 = [1, 1]
  // for (let i = 0; i < num - 2; i++) {
  //     arr1 = [...arr1, (arr1[arr1.length - 2] + arr1[arr1.length - 1])]
  // }
  // return arr1;
}

// console.log(findFibo(8));

function fibonacci(num) {
  if (num <= 2) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(7));



const animalHierarchy = [
  { id: "Animals", parent: null },
  { id: "Mammals", parent: "Animals" },
  { id: "Dogs", parent: "Mammals" },
  { id: "Cats", parent: "Mammals" },
  { id: "Golden Retriever", parent: "Dogs" },
  { id: "Husky", parent: "Dogs" },
  { id: "Bengal", parent: "Cats" }
];

// ==============================
function traverse(animalHierarchy, parent) {
  let node = {};
  animalHierarchy
    .filter(item => item.parent === parent)
    .forEach(item => (node[item.id] = traverse(animalHierarchy, item.id)));
  return node;
}
// console.log(traverse(animalHierarchy, null));
