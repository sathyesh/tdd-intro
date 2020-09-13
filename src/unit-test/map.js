import { isFunction} from "lodash";


export const map = (arg1, arg2) => {
    if(!(Array.isArray(arg1) && isFunction(arg2))){
        return null;
    }
    let manipulatedArray = [];
    for(let i = 0 ; i < arg1.length; i++){
        manipulatedArray.push(arg2(arg1[i]));
    }
    return manipulatedArray;
};

// export const map = (arr,func) => arr.reduce((acc, x)=>[...acc,func(x)],[]);

// _.isObject = function(obj) {
//     var type = typeof obj;
//     return type === 'function' || type === 'object' && !!obj;
//   };