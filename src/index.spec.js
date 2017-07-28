/*eslint-env jest, expect */
import generateReport from './';

describe('String accuracy', () => {
  test('accuracy should be 0 for two completele different strings', () => {
    const data = {
      oldString: 'abcdefghi',
      newString: 'jklmnoprs'
    };
    const expected = {
      accuracy: 0
    };

    expect(generateReport(data.oldString, data.newString).accuracy).toBe(expected.accuracy);
  });

  test('accuracy should be close to 1 for two similar strings', () => {
    const data = {
      oldString: 'lorem ipsum dolor sin amet',
      newString: 'loret fixum dolor sin amet'
    };
    const expected = {
      accuracy: 0.8
    };

    expect(generateReport(data.oldString, data.newString).accuracy).not.toBeLessThan(expected.accuracy);
  });

  test('accuracy should be close to 0 for two mostly different strings', () => {
    const data = {
      oldString: 'lorem ipsum dolor sin amet',
      newString: 'hello world'
    };
    const expected = {
      accuracy: 0.3
    };

    expect(generateReport(data.oldString, data.newString).accuracy).toBeLessThan(expected.accuracy);
  });

  test('accuracy should be full for two same strings', () => {
    const data = {
      oldString: 'lorem ipsum dolor sin amet',
      newString: 'lorem ipsum dolor sin amet'
    };
    const expected = {
      accuracy: 1
    };

    expect(generateReport(data.oldString, data.newString).accuracy).toBe(expected.accuracy);
  });
})
