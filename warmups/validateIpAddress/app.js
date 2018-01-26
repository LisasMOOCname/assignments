// Write a function to validate an IPv4 IP address, which has
// the format 172.16.254.1, with numbers from 0 to 255.

const validateIpAddress = (ipAddr) => {
    let parts = ipAddr.split(".");
    if (parts.length === 4) {
        for(let i = 0; i < parts.length; i++) {
            console.log(parts[i]);
            if(parts[i].length > 3) { // buggy returns both true and false
                return false;
            }
            let num = Number(parts[i]);
            if (!(num >= 0 && num <= 255)) {
                return false;
            }
        }
        return true;
    }
    else return false;
}

console.log(validateIpAddress("172.16.204.1"));

// console.log(validateIpAddress("172.16.274.1"));

//console.log(validateIpAddress("172.bb.254.1"));

//console.log(validateIpAddress("172254.1"));

console.log(validateIpAddress("234.1.43.54.57.66"));