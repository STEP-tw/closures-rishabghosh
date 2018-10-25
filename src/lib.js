const makeConstant = function(element){
  const returnFunc =  function(){
    return element;
  }
  return returnFunc;
}

//--------------------

const makeCounterFromN = function(elem){
  const incriment = function(){
    return elem++;
  }
  return incriment;
}

//----------------------

const makeCounterFromZero = function(){
  let count = 0;
  const counterFromZero = function(){
    return count ++;
  }
  return counterFromZero;
}

//--------------

const makeDeltaTracker = undefined;
/*
function(currOld){ 

    const updateOld = function(){
    return obj.new;
  }

  const trackDel = function(currDelta){

    let obj = {old: 0, delta: 0, new: 0};
    obj.old = currOld ;

    if(currDelta != undefined){
      obj.delta = currDelta;
    }

    let valueOfNew = obj.delta + obj.old;
    obj.new = valueOfNew;
    obj.old = obj.new;

    return obj; 
  }

  return trackDel;
}

*/

//----------------------
//currently its full with ugly code, and stupid logics. plz take precaution.

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

/*------------------------*/

//const makeCycler = undefined;
const makeCycler = function(list){

  for(let count = 0; count < list.length -1; count ++){
    list.push( list.shift() );
  }

  const cycleOne = function(){
    list.push( list.shift() );
    return list[0];
  }

  return cycleOne;
}


















const curry = undefined;
const compose = undefined;


exports.makeConstant=makeConstant;
exports.makeCounterFromZero=makeCounterFromZero;
exports.makeCounterFromN=makeCounterFromN;
exports.makeDeltaTracker=makeDeltaTracker;
exports.makeFiboGenerator=makeFiboGenerator;
exports.makeCycler=makeCycler;
exports.curry=curry;
exports.compose=compose;
