import {makeDirectory} from 'make-dir';

import {describe, it, expect, vi} from 'vitest';
import any from '@travi/any';
// eslint-disable-next-line import/no-unresolved
import {when} from 'vitest-when';

import {scaffold as scaffoldVersion} from './version/index.js';
import {scaffold as scaffoldHcl} from './hcl/index.js';
import scaffold from './scaffolder.js';

vi.mock('make-dir');
vi.mock('./version/index.js');
vi.mock('./hcl/index.js');

describe('scaffolder', () => {
  it('should scaffold terraform', async () => {
    const projectRoot = any.string();
    const createdTerraformDirectory = any.string();
    when(makeDirectory).calledWith(`${projectRoot}/terraform`).thenResolve(createdTerraformDirectory);

    expect(await scaffold({projectRoot})).toEqual({});
    expect(scaffoldVersion).toHaveBeenCalledWith({terraformDirectory: createdTerraformDirectory});
    expect(scaffoldHcl).toHaveBeenCalledWith({terraformDirectory: createdTerraformDirectory});
  });
});
