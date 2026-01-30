import assert from 'node:assert';
import {Then} from '@cucumber/cucumber';

Then('local state is ignored from version control', async function () {
  assert.deepEqual(this.result.vcsIgnore.directories, ['.terraform/']);
});
