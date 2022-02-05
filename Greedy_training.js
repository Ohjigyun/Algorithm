/*
점심시간에 도둑이 들어, 일부 학생이 체육복을 도난당했습니다. 다행히 여벌 체육복이 있는 학생이 이들에게 체육복을 빌려주려 합니다. 학생들의 번호는 체격 순으로 매겨져 있어, 바로 앞번호의 학생이나 바로 뒷번호의 학생에게만 체육복을 빌려줄 수 있습니다. 예를 들어, 4번 학생은 3번 학생이나 5번 학생에게만 체육복을 빌려줄 수 있습니다. 체육복이 없으면 수업을 들을 수 없기 때문에 체육복을 적절히 빌려 최대한 많은 학생이 체육수업을 들어야 합니다.

전체 학생의 수 n, 체육복을 도난당한 학생들의 번호가 담긴 배열 lost, 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve가 매개변수로 주어질 때, 체육수업을 들을 수 있는 학생의 최댓값을 return 하도록 solution 함수를 작성해주세요.
*/

function solution(n, lost, reserve) {
    //조건 1 인접한 학생에게만 체육복을 빌려줄 수 있다.
    //조건 2 여벌의 체육복을 가진 학생이 도난 당하면 빌려줄 수 없다.
    const current = Array.from(Array(n), (_)=> 1)
    for(const student of lost){
        current[student-1] --
    }
    for(const student of reserve){
        current[student-1] ++
    }

    for(let i = 0 ; i < n ; i++){
        if(current[i] === 2 && current[i-1] === 0 ){
            if(current[i-2] !== 2){
                current[i]--
                current[i-1]++
            }
        }
        if(current[i] === 2 && current[i+1] === 0){
            if(current[i+2] !== 2){
                current[i]--
                current[i+1]++
            }
        }
    }    
    //특이 케이스
    //1. 현재 체육복이 없으나 양 옆의 학생이 여분이 있을 때
    //양 옆의 학생 중 빌려줄 일이 없는 학생에게 체육복을 빌린다.
    for(let i = 0 ; i < n ; i++){
        if((current[i] === 0 && current[i-1] === 2) &&
           (current[i] === 0 && current[i+1] === 2)){
            if((current[i-2] !== 0) && (current[i+2] === 0)){
                current[i-1]--
                current[i]++
            }else if((current[i-2] === 0) && (current[i+2] !== 0)){
                current[i+1]--
                current[i]++
            }
        }
    }
    //2. 여분의 체육복이 존재하나 양 옆의 학생이 모두 체육복이 없을 때
    //양 옆의 학생 중 체육복을 받아올 수 없는 학생에게 체육복을 빌려준다.
    for(let i = 0 ; i < n ; i++){
        if((current[i] === 2 && current[i-1] === 0) &&
           (current[i] === 2 && current[i+1] === 0)){
            if(current[i-2] !== 2 && current[i+2] ===2){
                current[i+2]--
                current[i]++
            }else if(current[i-2] === 2 && current[i+2] !==2){
                current[i-2]--
                current[i]++
            }
        }
    }
    //엣지케이스 처리
    if(current[0] === 2 && current[1] === 0){
        current[0]--
        current[1]++
    }else if(current[current.length-1] === 2 && current[current.length-2] === 0){
        current[current.length-1]--
        current[current.length-2]++
    }
    for(let i = 0 ; i < n ; i++){
        if(current[i] === 0){
            if(current[i-1] === 2){
                current[i]++
                current[i-1]--
            }else if(current[i+1] ===2){
                current[i]++
                current[i+1]--
            }
        }
    }

    return current.filter(el=> el >= 1).length
    
}

/* 모범 답안
function solution(n, lost, reserve) {
    const students = {};
    let answer = 0;
    for(let i = 1; i <= n; i++){
        students[i] = 1;
    }
    lost.forEach(number => students[number] -= 1);
    reserve.forEach(number => students[number] += 1);

    for(let i = 1; i <= n; i++){
        if(students[i] === 2 && students[i-1] === 0){
                students[i-1]++;
                students[i]--;
        } else if(students[i] === 2 && students[i+1] === 0){
                students[i+1]++;
                students[i]--;
        }
    }
    for(let key in students){
        if(students[key] >= 1){
            answer++;
        }
    }
    return answer;
}
*/