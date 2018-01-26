var monkeyTrouble = function(aSmile, bSmile) {
if ((aSmile && bSmile) || (!aSmile && !bSmile)) {
    return true;
}
else {
    return false;
}
}

module.exports = monkeyTrouble;