const makeConstant = function(element){

  const returnGivenElement =  function(){
    return element;
  }

  return returnGivenElement;
}

/* ---------------------------------- */

const makeCounterFromN = function(number){

  const incrimentNumber = function(){
    return number++;
  }

  return incrimentNumber;
}

/* ---------------------------------- */

const makeCounterFromZero = function(){
  let counter = 0;

  const incrimentCounter = function(){
    return counter ++;
  }

  return incrimentCounter;
}

/* ---------------------------------- */

const makeDeltaTracker = function(currOld){ 
  let updateOld;
  let container = {old: 0, delta: 0, new: 0};

  const trackDel = function(currDelta){
        container.old = currOld ;

    if(updateOld !== undefined){
      container.old = updateOld;
    }

    if(currDelta !== undefined){
      container.delta = currDelta;
    }

    container.new = container.delta + container.old;
    updateOld = container.new;

    return container; 
  }

  return trackDel;
}




/* ---------------------------------- */

const makeFiboGenerator = function(firstResult,secondResult){
  let firstSeed = -1;
  let secondSeed = 1;
  let result;

  if(firstResult !== undefined){
    firstSeed = - firstResult; 
    secondSeed = firstResult;  
  }

  if(firstResult !== undefined && secondResult !== undefined){
    secondSeed = secondResult - firstResult;
    firstSeed = firstResult - secondSeed;
  }

  const generateResult = function(){
    result = firstSeed + secondSeed;
    firstSeed = secondSeed;
    secondSeed = result;
    return result;
  }

  return generateResult;
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

const curry = function(givenFunc, initValue){

  const partialFunc = function(value1, value2){
    return givenFunc(initValue, value1, value2);
  }

  return partialFunc;
}

/* ---------------------------------- */

const compose = function(firstFunc, secondFunc){

  const generateComposedResult = function(value1, value2){
    return firstFunc( secondFunc(value1, value2) );
  }

  return generateComposedResult; 
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
