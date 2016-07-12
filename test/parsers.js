import { expect } from 'chai';
import { parseMars, parseRobot, parseInstructionsToActionsCallbacks } from '../lib/parsers.js';
import { turnLeft, turnRight, stepForward } from '../lib/instructions.js';

describe('lib/parsers.js', () => {

  describe('parseMars()', () => {
    it('returns { x:10, y:10, scents:{} } object', () => {
      const out = { x: 10, y: 10, scents: {} };

      expect(
        parseMars(`${out.x} ${out.y}`)
      ).to.deep.equal(
        out
      );
    });

    it('throw an error for too big mars dimensions', () => {
      expect(
        () => parseMars('51, 49')
      ).to.throw(
        Error
      );
    });

    it('throw an error for too small mars dimensions', () => {
      expect(
        () => parseMars('25, 0')
      ).to.throw(
        Error
      );
    });

  });

  describe('parseRobot()', () => {
    it('returns { x:5, y:4, direction: "E" } object', () => {
      const out = { x: 5, y: 4, direction: 'E' };

      expect(
        parseRobot(`${out.x} ${out.y} ${out.direction}`)
      ).to.deep.equal(
        out
      );
    });

    it('throw an error on non existing robot direction "A"', () => {
      expect(
        () => parseRobot('9 8 A')
      ).to.throw(
        Error
      );
    });
  });

  describe('parseInstructionsToActionsCallbacks()', () => {
    it('returns mapped array of callback functions for "RFRFRLL" instructions', () => {
      expect(
        parseInstructionsToActionsCallbacks(`RFRFRLL`)
      ).to.deep.equal(
        [turnRight, stepForward, turnRight, stepForward, turnRight, turnLeft, turnLeft]
      );
    });

    it('throw an error for too many input instructions', () => {
      expect(
        () => parseInstructionsToActionsCallbacks(Array(50).fill('RL').toString().replace(/,/gi, ''))
      ).to.throw(
        Error
      );
    });

    it('throw an error for non existing instruction "B"', () => {
      expect(
        () => parseInstructionsToActionsCallbacks('RLB')
      ).to.throw(
        Error
      );
    });
  });

});
