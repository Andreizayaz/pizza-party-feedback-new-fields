import React from 'react';
import { checkIsArray } from '../../helpers';

export function TableRow({classes, children}) {
  return (
    <tr className={checkIsArray(classes)}>
      {children}
    </tr>
  )
}
