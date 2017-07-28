/*eslint-env jest, expect */
import { countTags, listTags } from './';

describe('Tags accuracy', () => {
  test('should count specific tags correctly', () => {
    const data = {
      string: '<div>AAA<p>BBB</p></div>'
    };
    const expected = {
      div: 1,
      p: 1
    };

    expect(countTags(data.string).p).toBe(expected.p);
  });

  test('should generate tags array correctly', () => {
    const data = {
      string: '<div>AAA<div><p>BBB</p><span>CCC</span></div></div>'
    };
    const expected = ['div', 'div', 'p', 'span'];

    expect(listTags(data.string)).toEqual(expected);
  });

  test('should filter out unnecessary tags correctly', () => {
    const data = {
      string: '<html><head></head><body><div>AAA</div></body></html>'
    };
    const expected = ['div'];

    expect(listTags(data.string)).toEqual(expected);
  });
});
