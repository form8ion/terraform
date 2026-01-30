import {directoryExists} from '@form8ion/core';

export default function projectUsesTerraform({projectRoot}) {
  return directoryExists(`${projectRoot}/terraform`);
}
