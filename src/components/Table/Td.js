import React from 'react';
import { checkIsArray } from '../../helpers';

export function Td({classes, text}) {
  return (
    <td className={checkIsArray(classes)}>
      {text}
    </td>
  )
}
