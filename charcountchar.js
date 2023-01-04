/// this program is for only count charecters for given text or something like that
/// this program avoid white space, number, spacial character.

function charCount(str) {
    let charList = {};

    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();

        if(char.match(/[a-z]/)){
            if (charList[char] > 0) {
                charList[char]++;
            } else {
                charList[char] = 1;
            }
        }
    }
    return charList
}
var test = charCount("sayed@123.com")
console.log(test)