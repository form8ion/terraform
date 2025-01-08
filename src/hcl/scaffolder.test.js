import {describe, expect, it, vi} from 'vitest';
import {promises as fs} from 'fs';
import any from '@travi/any';

import scaffoldHcl from './scaffolder.js';

vi.mock('node:fs');

describe('hcl scaffolder', () => {
  it('should scaffold the hcl files', async () => {
    const terraformDirectory = any.string();

    await scaffoldHcl({terraformDirectory});

    expect(fs.writeFile).toHaveBeenCalledWith(`${terraformDirectory}/main.tf`, '');
  });
});
