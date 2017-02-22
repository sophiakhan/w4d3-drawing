// Composition Example

// http://codepen.io/ericelliott/pen/XXzadQ?editors=001
// https://gist.github.com/ericelliott/fed0fd7a0d3388b06402

const distortion = { distortion: 1 };
const volume = { volume: 1 };
const cabinet = { cabinet: 'maple' };
const lowCut = { lowCut: 1 };
const inputLevel = { inputLevel: 1 };

// in es6, new way of writing functions (=> replaces). Without using the word 'function', it loses scope. 
// using 'let' instead of var let's you add in scope. 
const GuitarAmp = (options) => {
  return Object.assign({}, distortion, volume, cabinet, options);
};
// same as above: 
// const GuitarAmp = function(options) {
//   return Object.assign({}, distortion, volume, cabinet, options);
// };

const BassAmp = (options) => {
  return Object.assign({}, lowCut, volume, cabinet, options);
};

const ChannelStrip = (options) => {
  return Object.assign({}, inputLevel, lowCut, volume, options);
};

const myAmp = BassAmp({
  lowCut: 2,
  volume: 2,
  cabinet: 'vintage'
});

const myStrip = ChannelStrip({
  inputLevel: 2,
  lowCut: 2,
  volume: 2
});

var food = Object.assign({}, {flavor: 'salt'}, {spice: 'pepper'}, {veggie: 'zucchini'}, {oil: 'olive'});

console.log(food); 