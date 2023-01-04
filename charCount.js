/// this program is for count the charecter for given text or something like that

function charCount(str){
    let charList = {}
    
    for(let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase()


        if(charList[char] > 0){
            charList[char]++
        }else{
            charList[char] = 1
        }
        //console.log(charList)
    }

    return charList
}
var test = charCount("Hello Everybody")

console.log(test)