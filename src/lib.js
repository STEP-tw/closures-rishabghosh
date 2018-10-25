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










const makeCounterFromZero = undefined;
const makeDeltaTracker = undefined;
const makeFiboGenerator = undefined;
const makeCycler = undefined;
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
