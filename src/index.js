import { diffChars } from './diff/character';
import getReport from './rating';

const generateReport = (a, b) =>  getReport(diffChars(a, b));

export default generateReport;
