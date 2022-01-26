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

/*
한자리 숫자가 적힌 종이 조각이 흩어져있습니다. 흩어진 종이 조각을 붙여 소수를 몇 개 만들 수 있는지 알아내려 합니다.

각 종이 조각에 적힌 숫자가 적힌 문자열 numbers가 주어졌을 때, 종이 조각으로 만들 수 있는 소수가 몇 개인지 return 하도록 solution 함수를 완성해주세요.
*/

function isPrime(num){
    if(num < 2 ) return false
    for(let i = 2; i * i<= num; i++){
        if(num % i === 0){
            return false
        }
    }
    return true;
}

function permutation(arr, selectNum){
    const result = [];
    if(selectNum === 1 ) return arr.map((v) => [v]);
    
    arr.forEach((v, idx, arr)=>{
        const fixed = v;
        const restArr = arr.filter((_,index) => index !== idx);
        const permutationArr = permutation(restArr, selectNum -1);
        const combineFix = permutationArr.map((v)=> [fixed, ...v]);
        result.push(...combineFix);
    });
    return result;
}

function solution(n) {
    const arr = n.split('');
    let count = 0;
    //각 조각으로 만들 수 있는 모든 경우의 수를 가진 배열을 생성
    let arr2 = [];
    for(let i = 1 ; i <= n.length ; i++){
        arr2.push(permutation(arr,i))
    }
    let arr3 = [];
    for(const number of arr2){
        for(let item of number){
            if(!arr3.includes(item)){
                arr3.push(parseInt(item.join('')))
            }
        }
    }
    arr3 = arr3.filter((el , idx)=>{
        return arr3.indexOf(el) === idx
    })
    console.log(arr3)
    // isPrime을 통해 소수판별
    for(const number of arr3){
        if(isPrime(number)){
            count++
        }
    }
    
    //같다면 count 를 ++ 해 리턴
    return count

}

// 레퍼런스 코드

function solution(numbers) {
    var answer = 0;

    var n = numbers.split('');
    var nums = new Set()
    combi(n,'');

    function combi(a, s) {
        if (s.length > 0) {
            if (nums.has(Number(s))=== false) {
                nums.add(Number(s));
            console.log(Number(s))
                if (chkPrime(Number(s))) {

                    answer++;
                }
            }
        }
        if (a.length > 0) {
            for (var i = 0; i< a.length; i++) {
                var t = a.slice(0)
                t.splice(i,1);
                //console.log(t)
                combi(t,s + a[i]);
            }
        }
    }

    function chkPrime(num) {
        if (num < 2) return false;
        if (num === 2) return true;
        for (var i = 2; i <= Math.sqrt(num); i++) {
            if (num%i===0) return false;
        }
        return true;
    }

    return answer;
}