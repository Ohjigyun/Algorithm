//자동완성 trie 구현
function makeTrie(words){
    const root = {};
    for(const word of words){
        let current = root;
        for(const letter of word){
            if(!current[letter]) current[letter] = [0, {}];
            current[letter][0] = 1+(current[letter][0] || 0)
            current = current[letter][1];
        }
    }
    return root
}
function solution(words) {
    let answer = 0; 
    const trie = makeTrie(words);

    for(const word of words){
        let cnt = 0;
        let current = trie;
        for(const [index,letter] of [...word].entries()){
            cnt ++
            if(current[letter][0] <= 1){
                break;
            }
            current = current[letter][1];
        }
        answer += cnt
    }

    return answer;
}



/*Trie 구현

class Node {
    constructor(value = ""){
        this.value = value;
        this.children = new Map();
    }
}

class Trie {
    constructor(){
        this.root = new Node();
    }

    has(string){
        let currentNode = this.root;

        for(const char of string){
            if(!currentNode.children.has(char)){
                return false
            }
            currentNode = currentNode.children.get(char);
        }
        return true;
    }

    insert(string){
        let currentNode = this.root;

        for(const char of string){
            if(!currentNode.children.has(char)){
                currentNode.children.set(char , new Node(currentNode.value + char))
            }
            currentNode = currentNode.children.get(char)
        }
    }
}

*/