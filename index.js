let n = 153

let len = n.length

const isArmstrong = n => {
    let num = n;
    let t = 0;
    while(n != 0) {
        t += (n%10)**3;
        n =  Math.floor(n/10);
    }

    return num === t;
}

const isPrime = n => {
    for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
        if (n % i === 0) return false;
    }
    return n > 1;
}

console.log(isArmstrong(n))
console.log(isPrime(n))
