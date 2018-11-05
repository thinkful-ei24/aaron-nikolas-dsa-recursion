function countSheep(num) {
    if (num === 0) {
        return;
    }
    console.log(num, '- Another sheep jump over the fence');
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

// console.log(double([1, 2, 3]));


function reverseString(str) {
    if (!str.length) {
        return '';
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
        return '';
    }
    if (funct(str[0])) {
        return ' ' + splitIt(str.slice(1), funct)
    }
    return str[0] + splitIt(str.slice(1), funct)
}

// console.log(splitIt('hello/dog', char => char === '/'));


// Binary one supposed to be here, we dont know binary lolol


// input: 5
// output: 101

// 25 => 11001
// 25/2 = 12 
// 25%2 = 1

// base case: decimal reaches 0 return
// mod to get the 0 or 1 representation
// divide to make the number smaller towards the base case
// send the smaller value through the recursive call

function binaryRepresentation(num) {
    if (num <= 0) {
        return '';
    }
    const binary = Math.floor(num%2);
    return binaryRepresentation(Math.floor(num / 2)) + binary;
}

console.log(binaryRepresentation(25))


function factorialFunct(num) {
    if (num === 1) {
        return 1;
    }
    return num * factorialFunct(num - 1);
}

// console.log(factorialFunct(4));



function findFibo(num, num2) {
    if (num === num2.length) {
        return num2[num2.length - 1] + num2[num2.length - 2];
    }
    console.log(num2[num2.length - 1], num2[num2.length - 2])
    return [...num2, num2[num2.length - 1] + num2[num2.length - 2], ...findFibo(num, [...num2, num2[num2.length - 1] + num2[num2.length - 2]])];

    // let arr1 = [1, 1]
    // for (let i = 0; i < num - 2; i++) {
    //     arr1 = [...arr1, (arr1[arr1.length - 2] + arr1[arr1.length - 1])]
    // }
    // return arr1;
}

// console.log(findFibo(8, [1, 1]));


const animalHierarchy = [
    {id: 'Animals', parent: null},
    {id: 'Mammals', parent: 'Animals'},
    {id: 'Dogs', parent:'Mammals' },
    {id: 'Cats', parent:'Mammals' },
    {id: 'Golden Retriever', parent: 'Dogs'},
    {id: 'Husky', parent:'Dogs' },
    {id: 'Bengal', parent:'Cats' }
]

// ==============================
function traverse(animalHierarchy, parent) {
    let node = {};
    animalHierarchy.filter(item => item.parent === parent)
                   .forEach(item => node[item.id] = traverse(animalHierarchy, item.id));
    return node;  
}
// console.log(traverse(animalHierarchy, null));