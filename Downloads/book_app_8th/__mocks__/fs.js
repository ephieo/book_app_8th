//genMockFromModule generates an automatic mock and overrides the original behaviour of the module.
import { jest } from '@jest/globals';

const fs = jest.createMockFromModule('fs');
import path from 'path';
// mockfiles is an object that will store all fake files and folders
//Object.create(null) creates an object that doesn't inherit from anything.
let mockFiles = Object.create(null);
// example of newMockFiles
// "./testFolder/file1.txt": "This is the file content"
function __createMockFiles(newMockFiles) {
  mockFiles = Object.create(null);
  //iterating over the object to find all files names inside
  // for each file name if the file name does not exist it sets the filename as a key and an empty array as the value.
  for (const file in newMockFiles) {
    const dir = path.dirname(file);
    if (!mockFiles[dir]) {
      mockFiles[dir] = [];
    }
    //pushes basename of that path into the array
    //so if it's given "./testFolder/file1.txt" it pushes in "file1.txt" into the array.
    mockFiles[dir].push(path.basename(file));
    mockFiles[dir][path.basename(file)] = newMockFiles[file];
    console.log(newMockFiles[file]);
  }
}
//returns the value for the object key that matches that path.
function existsSync(pathToDirectory) {
  return mockFiles[pathToDirectory];
}
fs.existsSync = existsSync;
fs.__createMockFiles = __createMockFiles;

export default fs;
