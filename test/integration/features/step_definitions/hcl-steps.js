import {promises as fs} from 'node:fs';

import {Then} from '@cucumber/cucumber';
import assert from 'node:assert';

Then('the main file is created', async function () {
  assert.equal(await fs.readFile(`${this.projectRoot}/terraform/main.tf`, 'utf-8'), 'terraform {}');
});
