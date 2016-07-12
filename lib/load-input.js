import { createInterface } from 'readline';
import { createReadStream } from 'fs';

/**
 * Process file lines to array
 *
 * @param {String} path
 * @param {Function} cb
 */
export const loadInput = (path, cb) => {
  const lines = [];

  const rl = createInterface({
    input: createReadStream(path)
  });

  rl.on('line', (line) => {
    // Skip empty lines
    if (!line) {
      return;
    }

    lines.push(line);
  });

  rl.on('close', () => cb(lines));
};
