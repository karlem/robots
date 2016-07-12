import { turnLeft, turnRight, stepForward } from './instructions.js';

/**
 *
 * @param {Array} arrayLine
 * @private
 * @return {Object}
 */
const parseDimensionsFromLine = (arrayLine) => (
  arrayLine.reduce((acc, item, key) => (
    Object.assign(acc, {
      [key === 0 ? 'x' : 'y']: parseInt(item, 10)
    })
  ), {})
);

/**
 *
 * @param {Object} dimensions
 * @private
 * @return {*}
 */
const validateMarsDimensions = (dimensions) => {
  const max = 50;
  const min = 1;

  if (dimensions.x < min ||
    dimensions.y < min) {
    throw new Error(`Minimum mars dimensions are 1x1 getting: ${dimensions.x}x${dimensions.y}`);
  }

  if (dimensions.x > max ||
    dimensions.y > max) {
    throw new Error(`Maximum mars dimensions are 50x50 getting: ${dimensions.x}x${dimensions.y}`);
  }

  return dimensions;
};

/**
 *
 * @param {String} line
 * @public
 * @return {Object}
 */
export const parseMars = (line) => ({
  ...validateMarsDimensions(parseDimensionsFromLine(line.split(' '))),
  scents: {}
});

/**
 *
 * @param {String} direction
 * @return {*}
 */
const validateRobotDirection = (direction) => {
  const allowedDirection = ['N','W','S','E'];

  if (allowedDirection.indexOf(direction) === -1) {
    throw new Error(`Robot direction "${direction}" is not allowed`);
  }

  return direction;
};

/**
 *
 * @param {String} line
 * @public
 * @return {Object}
 */
export const parseRobot = (line) => {
  const splittedLine = line.split(' ');

  return {
    direction: validateRobotDirection(splittedLine.pop()),
    ...parseDimensionsFromLine(splittedLine)
  };
}

/**
 *
 * @param {String} instruction
 * @private
 * @return {Function}
 */
const mapInstructionToActionCallback = (instruction) => {
  switch (instruction) {
    case 'R':
      return turnRight;
    case 'L':
      return turnLeft;
    case 'F':
      return stepForward;
    default:
      throw new Error(`Unsupported instruction ${instruction}`)
  }
};

/**
 *
 * @param {String} line
 * @public
 * @return {Array}
 */
export const parseInstructionsToActionsCallbacks = (line) => {
  const instructions = line.split('');

  if (instructions.length >= 100) {
    throw new Error('Too many instructions');
  }

  return instructions.map(mapInstructionToActionCallback);
};
