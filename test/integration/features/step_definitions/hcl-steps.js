import {Then} from '@cucumber/cucumber';
import assert from 'node:assert';
import {fileExists} from '@form8ion/core';

Then('the main file is created', async function () {
  assert.equal(await fileExists(`${this.projectRoot}/terraform/main.tf`), true);
});
