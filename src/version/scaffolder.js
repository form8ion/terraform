import {promises as fs} from 'node:fs';

export default async function ({terraformDirectory}) {
  await fs.writeFile(`${terraformDirectory}/.terraform-version`, 'v1.8.2');
}
