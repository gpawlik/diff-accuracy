import Diff from './';

export const characterDiff = new Diff();

export function diffChars(oldStr, newStr, options) {
  console.log(`Strings: "${oldStr}", "${newStr}"`);

  return characterDiff.diff(oldStr, newStr, options);
}
