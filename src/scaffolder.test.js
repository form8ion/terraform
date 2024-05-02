import makeDir from 'make-dir';

import {describe, it, expect, vi} from 'vitest';
import any from '@travi/any';
import {when} from 'jest-when';

import {scaffold as scaffoldVersion} from './version/index.js';
import scaffold from './scaffolder.js';

vi.mock('make-dir');
vi.mock('./version/index.js');

describe('scaffolder', () => {
  it('should scaffold terraform', async () => {
    const projectRoot = any.string();
    const createdTerraformDirectory = any.string();
    when(makeDir).calledWith(`${projectRoot}/terraform`).mockResolvedValue(createdTerraformDirectory);

    expect(await scaffold({projectRoot})).toEqual({});
    expect(scaffoldVersion).toHaveBeenCalledWith({terraformDirectory: createdTerraformDirectory});
  });
});
