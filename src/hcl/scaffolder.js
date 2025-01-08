import {promises as fs} from 'fs';

export default async function ({terraformDirectory}) {
  await fs.writeFile(`${terraformDirectory}/main.tf`, '');
}
