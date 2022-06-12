// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
var isAnagram = function (s, t) {
    if (s.length != t.length) {
        return false;
    }

    let sObject = {};
    let tObject = {};
    let trueFalse = true;

    s.split("").forEach((letter) => {
        if (!sObject[letter]) {
            sObject[letter] = 1;
            return;
        }
        sObject[letter]++;
    });

    t.split("").forEach((letter) => {
        if (!sObject[letter]) {
            trueFalse = false;
            return;
        }

        if (!tObject[letter]) {
            tObject[letter] = 1;
            return;
        }
        tObject[letter]++;
    });

    for (const letter in sObject) {
        if (sObject[letter] != tObject[letter]) {
            trueFalse = false;
        }
    }

    return trueFalse;
};

console.log(isAnagram("hello", "world"));
console.log(isAnagram("racecar", "carrace"));
