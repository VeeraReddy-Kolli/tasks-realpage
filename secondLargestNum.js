const findSecondLargestNumb = (arr) => {
// initialize largestNum and secondLargestNum using destructuring
    let [largestNum, secondLargestNum] = [-Infinity, -Infinity];

// iterating over each number and updating the second largest number and largest number
arr.forEach(num => {
    if (num > largestNum) {
        secondLargestNum = largestNum;  
        largestNum = num;            
    } else if (num > secondLargestNum && num !== largestNum) {
        secondLargestNum = num; 
    }
});

// Check if secondLargestNum was updated from its initial value
    if (secondLargestNum === -Infinity) {
        console.log("There is no second largest number in the array.");
    } else {
        console.log("The second largest number is:", secondLargestNum);
    }
};


const arrNumbs = [6, 13, 22, 18, 0, 3, 45, 57, 5, 12];
findSecondLargestNumb(arrNumbs);
