import { findUsername, colourText, errorMessage } from './utils/utils.js';
import { jest } from '@jest/globals';

test(' findUsername function should return an array containing a username.', () => {
  expect(findUsername(testData.testObj, testData.username)).toEqual(['moon']);
});

// test(' colourText takes two strings and should return one coloured string.', () => {
//   expect(colourText(testData.string, testData.colour)).toEqual(['green']);
// });

describe('Tests my console.log', () => {
  console.log = jest.fn();
  it('should console a message', () => {
    console.log('My test is working with console.log');

    expect(console.log).toHaveBeenCalledWith(
      'My test is working with console.log'
    );
  });
});

// test('testing mock implementation', () => {
//   const mock = jest.fn.mockImplementation(errorMessage());
// });

// test(' fetchReadingList() function should return the users reading list.', () => {
//   expect(fetchReadingList(testData.username)).toContain(`readingList: [
//     '{\n' +
//       '              title:Book 67,\n' +
//       '              author:Blair Francis Hamilton,\n' +
//       '              publishingCompany:Holy Fire Publishing,\n' +
//       '         }'
//   ]`);
// });

let testData = {
  testObj: {
    users: {
      moon: 'readingList:[{\n        title:New Moon, Writing,\n        author:New Moon Books Girls Editorial Board,\n        company:Crown Pub,\n   }}]',
    },
    string: 'hello world !',
    colour: 'green',
  },
  username: 'moon',
  //testfunc: jest.fn(),
};
