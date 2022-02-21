import React from 'react';
import { checkIsArray } from '../../helpers';

export function Star({classes, filled, callback}) {
  return (
    <div className={checkIsArray(classes)} onClick={callback}>
      {filled? '\u2605':'\u2606'}
    </div>
  )
}
