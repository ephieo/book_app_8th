import { findUsername } from './utils/utils.js';
import { returnReadingList } from './utils/terminalDisplay.js';

test(' findUsername function should return an array containing a username.', () => {
  expect(findUsername(testData.testObj, testData.username)).toEqual(['moon']);
});

// test(' function should display the returned fetch data with the bookshelf format', () => {
//   expect(
//     returnBookSelection(testData.username, testData.testObj)
//   ).toHaveBeenCalled();
// });

let testData = {
  testObj: {
    users: {
      moon: 'readingList:[{\n        title:New Moon, Writing,\n        author:New Moon Books Girls Editorial Board,\n        company:Crown Pub,\n   }}]',
    },
  },
  username: 'moon',
  //testfunc: jest.fn(),
};

test(' fetchReadingList() function should return the users reading list.', () => {
  expect(
    fetchReadingList(testData.username).users[username].readingList
  ).toEqual(['New Moon, Writing']);
});
