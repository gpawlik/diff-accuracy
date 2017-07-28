/*eslint-env jest, expect */
import generateReport from './';

describe('Text accuracy', () => {
  test('accuracy should be 0 for two completele different strings', () => {
    const data = {
      oldString: 'abcdefghi',
      newString: 'jklmnoprs'
    };
    const expected = {
      accuracy: 0
    };

    expect(generateReport(data.oldString, data.newString).textAccuracy).toBe(expected.accuracy);
  });

  test('accuracy should be close to 1 for two similar strings', () => {
    const data = {
      oldString: 'lorem ipsum dolor sin amet',
      newString: 'loret fixum dolor sin amet'
    };
    const expected = {
      accuracy: 0.8
    };

    expect(generateReport(data.oldString, data.newString).textAccuracy).not.toBeLessThan(expected.accuracy);
  });

  test('accuracy should be close to 0 for two mostly different strings', () => {
    const data = {
      oldString: 'lorem ipsum dolor sin amet',
      newString: 'hello world'
    };
    const expected = {
      accuracy: 0.3
    };

    expect(generateReport(data.oldString, data.newString).textAccuracy).toBeLessThan(expected.accuracy);
  });

  test('accuracy should be full for two same strings', () => {
    const data = {
      oldString: 'lorem ipsum dolor sin amet',
      newString: 'lorem ipsum dolor sin amet'
    };
    const expected = {
      accuracy: 1
    };

    expect(generateReport(data.oldString, data.newString).textAccuracy).toBe(expected.accuracy);
  });
});

describe('Tags accuracy', () => {
  test('should be 1 for the strings with matching tags', () => {
    const data = {
      oldString: '<p>Lorem ipsum <span>dolor sin amet</span></p>',
      newString: '<p>Lorem ipsum <span>dolor sin amet</span></p>'
    };
    const expected = {
      accuracy: 1
    };

    expect(generateReport(data.oldString, data.newString).tagsAccuracy).toBe(expected.accuracy);
  });

  test('should be 0 for the strings without matching tags', () => {
    const data = {
      oldString: '<section><h1>Lorem ipsum dolor sin amet</h1></section>',
      newString: '<p>Lorem ipsum <span>dolor sin amet</span></p>'
    };
    const expected = {
      accuracy: 0
    };

    expect(generateReport(data.oldString, data.newString).tagsAccuracy).toBe(expected.accuracy);
  });
});

describe('Overall accuracy', () => {
  test('should be 1 for the strings with matching tags', () => {
    const data = {
      oldString: '<p>Lorem ipsum <span>dolor sin amet</span></p>',
      newString: '<p>Lorem ipsum <span>dolor sin amet</span></p>'
    };
    const expected = {
      accuracy: 1
    };

    expect(generateReport(data.oldString, data.newString).overallAccuracy).toBe(expected.accuracy);
  });

  test('should be slightly more than 0 for the strings without matching tags but matching text', () => {
    const data = {
      oldString: '<section><h1>Lorem ipsum dolor sin amet</h1></section>',
      newString: '<p>Lorem ipsum <span>dolor sin amet</span></p>'
    };
    const expected = {
      accuracy: 0.1
    };

    expect(generateReport(data.oldString, data.newString).overallAccuracy).not.toBeLessThan(expected.accuracy);
  });
});
