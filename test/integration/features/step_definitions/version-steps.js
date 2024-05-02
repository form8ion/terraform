import {promises as fs} from 'node:fs';
import assert from 'node:assert';

import {Then} from '@cucumber/cucumber';

Then('the version file is created', async function () {
  const version = await fs.readFile(`${this.projectRoot}/terraform/.terraform-version`, 'utf-8');

  assert.equal(version, 'v1.8.2');
});
