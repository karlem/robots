import { join as joinPath } from 'path';
import { loadInput } from './load-input.js';
import { parseMars, parseRobot, parseInstructionsToActionsCallbacks } from './parsers.js';
import { isOffMars, isAboutFallOffMars, addScentToMars } from './mars-helpers.js';

export const createExecuteInstructions = mars => (robot, instructions) => (
  instructions.reduce((acc, instruction) => {
    // Don't call any other instructions, robot is lost.
    if (acc.isLost) {
      return acc;
    }

    const processedInstruction = instruction(acc);

    // Skip instruction if standing on a scent and facing same direction as previous robot
    if (isAboutFallOffMars(mars, acc, processedInstruction)) {
      return acc;
    }

    if (isOffMars(mars, processedInstruction)) {
      mars.scents = addScentToMars(mars.scents, acc, processedInstruction);

      acc.isLost = true;

      return acc;
    }

    return processedInstruction;
  }, robot)
);

const logRobot = ({x, y, direction, isLost}) => console.log(`${x} ${y} ${direction} ${isLost ? 'LOST' : ''}`);

/**
 * @param {Array} lines
 * @void
 */
const appRun = (lines) => {
  const executeInstructions = createExecuteInstructions(parseMars(lines.shift()));

  for (let i = 0; i < lines.length; i += 2) {
    logRobot(executeInstructions(parseRobot(lines[i]), parseInstructionsToActionsCallbacks(lines[i + 1])));
  }
};

if (process.env.NODE_ENV !== 'test') {
  // Load input and run main app
  loadInput(joinPath(process.cwd(), 'inputs.txt'), appRun);
}
