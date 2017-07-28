import Diff from './';

export const arrayDiff = new Diff();

arrayDiff.tokenize = arrayDiff.join = function(value) {
  return value.slice();
};

export function diffArrays(oldArr, newArr) {
  return arrayDiff.diff(oldArr, newArr);
}
