import { findUsername } from './utils/utils.js';
import { fetchReadingList } from './utils/terminalDisplay.js';

test(' findUsername function should return an array containing a username.', () => {
  expect(findUsername(testData.testObj, testData.username)).toEqual(['moon']);
});

test(' fetchReadingList() function should return the users reading list.', () => {
  expect(fetchReadingList(testData.username)).toMatchObject(`readingList: [
    '{\n' +
      '              title:Book 67,\n' +
      '              author:Blair Francis Hamilton,\n' +
      '              publishingCompany:Holy Fire Publishing,\n' +
      '         }'
  ]`);
});

let testData = {
  testObj: {
    users: {
      moon: 'readingList:[{\n        title:New Moon, Writing,\n        author:New Moon Books Girls Editorial Board,\n        company:Crown Pub,\n   }}]',
    },
  },
  username: 'moon',
  //testfunc: jest.fn(),
};