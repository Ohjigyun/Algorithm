//1부터 N까지의 소수의 갯수 => 에라토스테네스의 체
function get_primes(num){
    const prime = [false , false , ...Array(num-1).fill(true)];
    
    for(let i = 2 ; i * i <= num ; i += 1){
        if(prime[i]){
            for(let j = i * 2 ; j <= num ; j += i ){
                prime[j] = false;
            }
        }
    }
    return prime.filter(Boolean);
}

function solution(n) {
    return get_primes(n).length
}