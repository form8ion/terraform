import makeDir from 'make-dir';

import {scaffold as scaffoldVersion} from './version/index.js';

export default async function ({projectRoot}) {
  const terraformDirectory = await makeDir(`${projectRoot}/terraform`);

  await scaffoldVersion({terraformDirectory});

  return {};
}
