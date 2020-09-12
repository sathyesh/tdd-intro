// 'cat' -> {c:1,a:1,t:1}
// 'better' -> {b:1,e:2,t:2,r:1}

import _ from 'lodash';

const getLetterCount = (word) => {
    
    let letterCount = {};

    if(!_.isString(word)){
        return letterCount;
    }

    let letters = word.split('');
    for(let letter of letters){
        if(typeof letterCount[letter] === 'undefined'){
            letterCount[letter] = 1;
        }else{
            letterCount[letter] += 1;
        }
    }
    return letterCount;
};

export default getLetterCount;