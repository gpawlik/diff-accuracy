import { JSDOM } from 'jsdom';
import { tags } from './../config';

export const countTags = string => {
  const dom = new JSDOM(string);

  const result = tags.allow.reduce((memo, item) => {
    memo[item] = dom.window.document.getElementsByTagName(item).length;

    return memo;
  }, {});

  return result;
};

export const listTags = string => {
  const dom = new JSDOM(string);
  const allElements = dom.window.document.getElementsByTagName("*");
  const tagList = [];

  for (let i = 0, max = allElements.length; i < max; i++) {
    tagList.push(allElements[i].tagName.toLowerCase());
  }

  return filterTags(tagList);
}

export const filterTags = tagsList => {
  return tagsList.filter(tag => tags.ignore.indexOf(tag) < 0)
}

export default countTags;
