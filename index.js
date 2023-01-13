let n = 153

let len = n.length

const isArmstrong = n => {
let i = 0;
let sum = 0;

while (i < len) 
    {
        let digit = n[i] - '0';
        sum = (sum + Math.pow(digit, len));
        i++;
    }

    return sum == n;
}


const isPrime = n => {
    for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
        if (n % i === 0) return false;
    }
    return n > 1;
}

console.log(isArmstrong(n))
console.log(isPrime(n))
