// Import Chai
import chai from 'chai';

// Import Any Files to Test
import { List } from '../src/js/Models/list'
// Set Chai Constants
const expect = chai.expect;
const should = chai.should();
const assert = chai.assert;

describe('Something We Want To Test', function () {

  describe('Testing the Creation of a List', function () {
    let list = new List;
    it('should exist after we create it', function () {
      expect(list).to.be.an.instanceof(List);
    });
    it('should have a method to add contacts', function () {
      list.addContact("Jenna");
      expect(list.contacts).to.eql(['Jenna'])
    })
    it('should have a method to remove contacts', function() {
      list.removeContact("Jenna");
      expect(list.contacts).to.eql([]);
    })
  });


});