/**
 *
 * @param {Object} robot
 * @return {{direction: *}}
 * @public
 */
export const turnLeft = (robot) => {
  const turns = {
    'N': 'W',
    'W': 'S',
    'S': 'E',
    'E': 'N'
  };

  return {
    ...robot,
    direction: turns[robot.direction]
  };
};

/**
 *
 * @param {Object} robot
 * @return {{direction: *}}
 * @public
 */
export const turnRight = (robot) => {
  const turns = {
    'N': 'E',
    'E': 'S',
    'S': 'W',
    'W': 'N'
  };

  return {
    ...robot,
    direction: turns[robot.direction]
  };
};

/**
 *
 * @param {Object} robot
 * @return {{direction: *}}
 * @public
 */
export const stepForward = (robot) => {
  const steps = {
    'N': () => ({ ...robot, y: robot.y + 1 }),
    'E': () => ({ ...robot, x: robot.x + 1 }),
    'S': () => ({ ...robot, y: robot.y - 1 }),
    'W': () => ({ ...robot, x: robot.x - 1 })
  };

  return steps[robot.direction]();
};
