const Console = require("./console.js");

/**
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    let hash = [];
    let indices = [];
    nums.forEach((value, index) => {
        let result = target - value;
        if (hash[result] !== undefined) {
            indices = [index, hash[result]];
        }
        hash[value] = index;
    });

    return indices;
};

/**
 * You are playing the following Bulls and Cows game with your friend:
 * You write down a number and ask your friend to guess what the number is.
 * Each time your friend makes a guess, you provide a hint that indicates how many digits in said guess match your secret number exactly in both digit and position (called "bulls") and how many digits match the secret number but locate in the wrong position (called "cows"). 
 * Your friend will use successive guesses and hints to eventually derive the secret number.
 * 
 * Write a function to return a hint according to the secret number and friend's guess, use A to indicate the bulls and B to indicate the cows. 
 * 
 * Please note that both secret number and friend's guess may contain duplicate digits.
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
const getHint = (secret, guess) => {
    let output = "";
    bulls = {};
    cows = {};

    secret.split("").forEach((char, index) => {
        if (index == 0 && parseInt(guess.charAt(index)) == 0) {
        } else if (char == guess.charAt(index)) {
            bulls[guess.charAt(index)] = bulls[guess.charAt(index)] == undefined ? 1 :  bulls[guess.charAt(index)]++;
        } else {
            cows[guess.charAt(index)] = cows[guess.charAt(index)] == undefined ? 1 : cows[guess.charAt(index)]++;
        }
    });

    output +=  Object.keys(bulls).length > 0 ? Object.keys(bulls).length + "A" : "0A";
    output +=  Object.keys(cows).length > 0 ? Object.keys(cows).length + "B" : "0B";

    return output;
};

/**
 * Initialize your data structure here.
 */
const Logger = function() {
    
};

/**
 * Returns true if the message should be printed in the given timestamp, otherwise returns false.
        If this method returns false, the message will not be printed.
        The timestamp is in seconds granularity. 
 * @param {number} timestamp 
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function(timestamp, message) {
    
};


module.exports = {
    twoSum,
    getHint,
    Logger
}


// EXAMPLES:
// twoSum
let nums = [2, 7, 11, 15];
let target = 9;

Console.output(problems.twoSum(nums, target));

// getHint

let secret = "1807";
let guess = "7810";

Console.output(problems.getHint(secret, guess));

secret = "1123";
guess = "0111";

Console.output(problems.getHint(secret, guess));