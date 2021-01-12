import { countsAsAYes } from '../utils.js';

const test = QUnit.test;

test('it should return true when given a word that starts with y or Y', (expect) => {
  
    const expected = true;
    
    const actual = countsAsAYes('yesssssssss');

    expect.equal(actual, expected);
});

test('it should return false when given a word that does not with y or Y', (expect) => {

    const expected = false;
    
    const actual = countsAsAYes('nopeeee');

    expect.equal(actual, expected);
});

