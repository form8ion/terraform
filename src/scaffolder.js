import {makeDirectory} from 'make-dir';

import {scaffold as scaffoldVersion} from './version/index.js';
import {scaffold as scaffoldHcl} from './hcl/index.js';

export default async function ({projectRoot}) {
  const terraformDirectory = await makeDirectory(`${projectRoot}/terraform`);

  await Promise.all([
    scaffoldVersion({terraformDirectory}),
    scaffoldHcl({terraformDirectory})
  ]);

  return {vcsIgnore: {directories: ['.terraform/']}};
}
