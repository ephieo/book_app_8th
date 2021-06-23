import {
  findUsername,
  updateDatabase,
  errorMessage,
  correctString,
} from './utils/utils.js';
import { jest } from '@jest/globals';
import fs from './__mocks__/fs.js';
import script from './__mocks__/mockScript.js';

const FOLDER_PRESENT_CONFIG = {
  './testFolder/testFile.txt': 'testData.testObj',
};

jest.mock('fs');
beforeEach(() => {
  jest.resetModules();
  jest.resetAllMocks();
});
test('NO FOLDER FOUND TEST', () => {
  fs.__createMockFiles(NO_FOLDER_CONFIG);
  const spy = jest.spyOn(console, 'log');
  script();
  expect(spy.mock.calls).toEqual([['Folder not found']]);
});
// test('FOLDER FOUND TEST', () => {
//   fs.__createMockFiles(FOLDER_PRESENT_CONFIG);
//   const spy = jest.spyOn(console, 'log');
//   script();
//   expect(spy.mock.calls).toEqual([['Folder Found']]);
// });

test(' findUsername function should return an array containing a username.', () => {
  expect(findUsername(testData.testObj, testData.username)).toEqual(['moon']);
});

// test(' colourText takes two strings and should return one coloured string.', () => {
//   expect(colourText(testData.string, testData.colour)).toEqual(['green']);
// });

test(' errorMessage function runs ', () => {
  expect(errorMessage()).toEqual(0);
});

test(' takes string and removes undescaped charcters from said string. ', () => {
  expect(
    correctString(
      'testing😂 testing😂 testing😂  --- ____ ^%£$@@(* 😂😂❤️💯🥰😄😁'
    )
  ).toEqual('testing testing testing  --- ____ %£$@@ ');
});

// test(' updates database ', () => {
//   expect(updateDatabase()).toHaveBeenCalled();
// });

describe('Tests my console.log', () => {
  console.log = jest.fn();
  let message = 'Try again and enter either 1 or 2';
  it('should console.log an error message', () => {
    console.log(
      `Error : You\'ve entered the wrong input. Restart by entering : 'npm run play' ${message}`
    );

    expect(console.log).toHaveBeenCalledWith(
      `Error : You\'ve entered the wrong input. Restart by entering : 'npm run play' Try again and enter either 1 or 2`
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
};

const NO_FOLDER_CONFIG = {};
// const FOLDER_PRESENT_CONFIG = {
//   './testFolder/testFile.txt': testData.testObj,
// };
