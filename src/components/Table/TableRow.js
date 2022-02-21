import React from 'react';
import { checkIsArray } from '../../helpers';

export function TableRow({ classes, children, callback }) {

  return (
    <tr className={checkIsArray(classes)} onClick={callback}>
      {children}
    </tr>
  )
}
