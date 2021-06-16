import { findUsername, colourText } from './utils/utils.js';
//import { fetchReadingList } from './utils/terminalDisplay.js';

test(' findUsername function should return an array containing a username.', () => {
  expect(findUsername(testData.testObj, testData.username)).toEqual(['moon']);
});

// test(' colourText takes two strings and should return one coloured string.', () => {
//   // const mockKleur = jest.fn();
//   // doAdd(1, 2, mockCallback);
//   // expect(mockCallback).toHaveBeenCalledWith(3);
//   //expect(colourText(testData.string, testData.colour)).toEqual(['green']);
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
