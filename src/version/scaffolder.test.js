import {promises as fs} from 'node:fs';

import any from '@travi/any';
import {vi, describe, it, expect} from 'vitest';

import scaffoldVersion from './scaffolder.js';

vi.mock('node:fs');

describe('version scaffolder', () => {
  it('should create the version file', async () => {
    const terraformDirectory = any.string();

    await scaffoldVersion({terraformDirectory});

    expect(fs.writeFile).toHaveBeenCalledWith(`${terraformDirectory}/.terraform-version`, 'v1.8.2');
  });
});
