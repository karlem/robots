import { expect } from 'chai';
import { isOffMars, isAboutFallOffMars, addScentToMars } from '../lib/mars-helpers.js';

// Test helpers
import { getMarsObject, getRobotObject } from './helpers/index.js';

describe('lib/mars-helpers.js', () => {

  describe('isOffMars()', () => {
    it('returns true', () => {
      const mars = getMarsObject(10, 10);

      expect(
        isOffMars(mars, getRobotObject(11, 10, 'W'))
      ).to.equal(
        true
      );

      expect(
        isOffMars(mars, getRobotObject(9, 11, 'S'))
      ).to.equal(
        true
      );
    });

    it('returns false', () => {
      expect(
        isOffMars(getMarsObject(6, 4), getRobotObject(5, 4, 'E'))
      ).to.equal(
        false
      );
    });
  });

  describe('addScentToMars()', () => {
    it('returns { "54EN": true } object', () => {
      expect(
        addScentToMars({}, getRobotObject(5, 4, 'E'), getRobotObject(5, 5, 'N'))
      ).to.deep.equal(
        { '54EN': true }
      );
    });

    it('returns combined { "22SW": true, "54EN": true } object', () => {
      const firstScent = addScentToMars({}, getRobotObject(5, 4, 'E'), getRobotObject(5, 5, 'N'));

      expect(
        addScentToMars(firstScent, getRobotObject(2, 2, 'S'), getRobotObject(5, 5, 'W'))
      ).to.deep.equal(
        { '22SW': true, '54EN': true }
      );
    });
  });

  describe('isAboutFallOffMars()', () => {
    it('returns true', () => {
      expect(
        isAboutFallOffMars(getMarsObject(5, 5, { '54EN': true }), getRobotObject(5, 4, 'E'), getRobotObject(5, 5, 'N'))
      ).to.equal(
        true
      );
    });

    it('returns false', () => {
      expect(
        isAboutFallOffMars(getMarsObject(5, 5, { '54EN': true }), getRobotObject(2, 4, 'E'), getRobotObject(5, 5, 'N'))
      ).to.equal(
        false
      );
    });
  });

});
