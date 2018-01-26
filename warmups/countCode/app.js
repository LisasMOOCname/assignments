function countCode(str) {
    var count = 0;
    for(let i = 0; i < str.length - 3; i++) {
        if(str[i] === "c") {
            if(str[i + 1] === "o") {
                i += 3;
                if(str[i] === "e") {
                    count ++;
                }
            }
        }
    }
    return count;
}

console.log(countCode("hicoleandcapexandedocoeccodeode"));