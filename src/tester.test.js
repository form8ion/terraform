import {directoryExists} from '@form8ion/core';

import {it, describe, expect, vi} from 'vitest';
import {when} from 'vitest-when';
import any from '@travi/any';

import projectUsesTerraform from './tester.js';

vi.mock('@form8ion/core');

describe('tester', () => {
  const projectRoot = any.string();

  it('should return `true` if the terraform directory exists', async () => {
    when(directoryExists).calledWith(`${projectRoot}/terraform`).thenResolve(true);

    expect(await projectUsesTerraform({projectRoot})).toBe(true);
  });

  it('should return `false` if the terraform directory exists', async () => {
    when(directoryExists).calledWith(`${projectRoot}/terraform`).thenResolve(false);

    expect(await projectUsesTerraform({projectRoot})).toBe(false);
  });
});
