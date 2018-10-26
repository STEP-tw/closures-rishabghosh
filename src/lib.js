const makeConstant = function(element){

  const returnFunc =  function(){
    return element;
  }

  return returnFunc;
}

/* ---------------------------------- */

const makeCounterFromN = function(elem){

  const incriment = function(){
    return elem++;
  }

  return incriment;
}

/* ---------------------------------- */

const makeCounterFromZero = function(){
  let counter = 0;

  const countererFromZero = function(){
    return counter ++;
  }

  return countererFromZero;
}

/* ---------------------------------- */

const makeDeltaTracker = function(currOld){ 
let newVal;

  const trackDel = function(currDelta){
    let object = {old: 0, delta: 0, new: 0};
    object.old = currOld ;
    
    if(newVal != undefined){
      object.old = newVal;
    }

    if(currDelta != undefined){
      object.delta = currDelta;
    }

    object.new = object.delta + object.old;
    newVal = object.new;

    return object; 
  }

  return trackDel;
}

/* ---------------------------------- */

const makeFiboGenerator = function(num1,num2){
  let firstFibo = -1;
  let secondFibo = 1;

  if(num1 != undefined){
    firstFibo = -num1; 
    secondFibo = num1;  
  }

  if(num2 != undefined){
    secondFibo = num2 - num1;
    firstFibo = num1 - secondFibo;
  }

  const getNextFibo = function(){
    let result = firstFibo + secondFibo;

    const updateFibo = function(){
      firstFibo = secondFibo;
      secondFibo = result;
    }

    updateFibo();

    return result;
  }

  return getNextFibo;
}

/* ---------------------------------- */

const makeCycler = function(list){
  let cloneOfList = list.slice();
  let count = -1; 

  const cycleOne = function(){
    count ++;
    if(count === cloneOfList.length){
      count = 0;
    }
    return cloneOfList[count];
  }

  return cycleOne;
}

/* ---------------------------------- */

const curry = function(callback, initValue){

  const executeCallback = function(value, value2){
    return callback(initValue, value, value2);
  }

  return executeCallback;
}

/* ---------------------------------- */

const compose = function(callback1, callback2){

  const executeCallbacks = function(value1, value2){
    return callback1( callback2(value1, value2));
  }

  return executeCallbacks; 
}

/* ---------------------------------- */

exports.makeConstant=makeConstant;
exports.makeCounterFromZero=makeCounterFromZero;
exports.makeCounterFromN=makeCounterFromN;
exports.makeDeltaTracker=makeDeltaTracker;
exports.makeFiboGenerator=makeFiboGenerator;
exports.makeCycler=makeCycler;
exports.curry=curry;
exports.compose=compose;
