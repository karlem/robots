import { expect } from 'chai';
import { turnLeft, turnRight, stepForward } from '../lib/instructions.js';

// Test helpers
import { getRobotObject } from './helpers/index.js';

describe('lib/instructions.js', () => {

  describe('turnLeft()', () => {
    it('returns robot object with "W" direction from "N"', () => {
      expect(
        turnLeft(getRobotObject(5, 5, 'N'))
      ).to.deep.equal(
        getRobotObject(5, 5, 'W')
      );
    });

    it('returns robot object with "S" direction from "W"', () => {
      expect(
        turnLeft(getRobotObject(5, 5, 'W'))
      ).to.deep.equal(
        getRobotObject(5, 5, 'S')
      );
    });

    it('returns robot object with "E" direction from "S"', () => {
      expect(
        turnLeft(getRobotObject(5, 5, 'S'))
      ).to.deep.equal(
        getRobotObject(5, 5, 'E')
      );
    });

    it('returns robot object with "N" direction from "E"', () => {
      expect(
        turnLeft(getRobotObject(5, 5, 'E'))
      ).to.deep.equal(
        getRobotObject(5, 5, 'N')
      );
    });

  });

  describe('turnRight()', () => {
    it('returns robot object with "E" direction from "N"', () => {
      expect(
        turnRight(getRobotObject(5, 5, 'N'))
      ).to.deep.equal(
        getRobotObject(5, 5, 'E')
      );
    });

    it('returns robot object with "S" direction from "E"', () => {
      expect(
        turnRight(getRobotObject(5, 5, 'E'))
      ).to.deep.equal(
        getRobotObject(5, 5, 'S')
      );
    });

    it('returns robot object with "W" direction from "S"', () => {
      expect(
        turnRight(getRobotObject(5, 5, 'S'))
      ).to.deep.equal(
        getRobotObject(5, 5, 'W')
      );
    });

    it('returns robot object with "N" direction from "W"', () => {
      expect(
        turnRight(getRobotObject(5, 5, 'W'))
      ).to.deep.equal(
        getRobotObject(5, 5, 'N')
      );
    });

  });

  describe('stepForward()', () => {
    it('returns { x:5, y:6, direction:"N" } object', () => {
      expect(
        stepForward(getRobotObject(5, 5, 'N'))
      ).to.deep.equal(
        getRobotObject(5, 6, 'N')
      );
    });

    it('returns { x:5, y:6, direction:"E" } object', () => {
      expect(
        stepForward(getRobotObject(5, 5, 'E'))
      ).to.deep.equal(
        getRobotObject(6, 5, 'E')
      );
    });

    it('returns { x:5, y:4, direction:"S" } object', () => {
      expect(
        stepForward(getRobotObject(5, 5, 'S'))
      ).to.deep.equal(
        getRobotObject(5, 4, 'S')
      );
    });

    it('returns { x:4, y:5, direction:"W" } object', () => {
      expect(
        stepForward(getRobotObject(5, 5, 'W'))
      ).to.deep.equal(
        getRobotObject(4, 5, 'W')
      );
    });

  });

});
