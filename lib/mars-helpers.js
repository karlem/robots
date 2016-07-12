/**
 *
 * @param {Object} mars
 * @param {Object} robot
 * @public
 * @return {Boolean}
 */
export const isOffMars = (mars, robot) => (
  robot.x > mars.x ||
  robot.y > mars.y ||
  robot.x < 0 ||
  robot.y < 0
);

/**
 *
 * @param robot
 * @param instructionStep
 * @private
 * @return {String}
 */
const getScentKey = (robot, instructionStep) => (
  `${robot.x}${robot.y}${robot.direction}${instructionStep.direction}`
);

/**
 *
 * @param {Object} mars
 * @param {Object} robot
 * @param {Object} instructionStep
 * @public
 * @return {boolean}
 */
export const isAboutFallOffMars = (mars, robot, instructionStep) => (
  mars.scents[getScentKey(robot, instructionStep)] || false
);

/**
 *
 * @param {Object} scents
 * @param {Object} robot
 * @param {Object} instructionStep
 * @public
 * @return {Object}
 */
export const addScentToMars = (scents, robot, instructionStep) => ({
  ...scents,
  [getScentKey(robot, instructionStep)]: true
});
