import { expect } from 'chai';
import { createExecuteInstructions } from '../lib/index.js';
import { parseInstructionsToActionsCallbacks } from '../lib/parsers.js';

// Test helpers
import { getMarsObject, getRobotObject } from './helpers/index.js';

// In a real world I would think about better way how test this file...
// Ideally get rid of usage parseInstructionsToActionsCallbacks fn..
describe('lib/index.js', () => {
  describe('createExecuteInstructions()', () => {
    it('returns function', () => {
      expect(
        createExecuteInstructions({})
      ).to.be.a(
        'function'
      );
    });
  });

  describe('createExecuteInstructions()()', () => {
    const executeInstructions = createExecuteInstructions(getMarsObject(5, 3));

    it('returns { x: 1, y: 1, direction: "E" } object', () => {
      expect(
        executeInstructions(getRobotObject(1, 1, 'E'), parseInstructionsToActionsCallbacks('RFRFRFRF'))
      ).to.deep.equal(
        getRobotObject(1, 1, 'E')
      );
    });

    it('returns { x: 3, y: 3, direction: "N", isLost: true } object', () => {
      expect(
        executeInstructions(getRobotObject(3, 2, 'N'), parseInstructionsToActionsCallbacks('FRRFLLFFRRFLL'))
      ).to.deep.equal(
        {...getRobotObject(3, 3, 'N'), isLost: true}
      );
    });

    it('returns { x: 2, y: 3, direction: "S", isLost: true } object', () => {
      expect(
        executeInstructions(getRobotObject(0, 3, 'W'), parseInstructionsToActionsCallbacks('LLFFFLFLFL'))
      ).to.deep.equal(
        getRobotObject(2, 3, 'S')
      );
    });

  });

});
