import { diffChars } from './diff/character';
import { diffArrays } from './diff/array';
import { listTags } from './tags';
import getReport from './rating';
import { accuracy } from './config'

const generateTextReport = (oldString, newString) => {
  return diffChars(oldString, newString);
}

const generateTagsReport = (oldString, newString) => {
  return diffArrays(listTags(oldString), listTags(newString));
}

const calculateOverallAccuracy = items => {
  let result = 0;

  for (let prop in items) {
    if(accuracy.weight && accuracy.weight.hasOwnProperty(prop)) {
      result = result + accuracy.weight[prop] * items[prop];
    }
  }

  return result;
}

const generateReport = (input, output) => {
  const { accuracy: textAccuracy } = getReport(generateTextReport(input, output));
  const { accuracy: tagsAccuracy } = getReport(generateTagsReport(input, output));
  const overallAccuracy = calculateOverallAccuracy({ text: textAccuracy, tags: tagsAccuracy });

  return {
    textAccuracy,
    tagsAccuracy,
    overallAccuracy
  }
};

export default generateReport;
