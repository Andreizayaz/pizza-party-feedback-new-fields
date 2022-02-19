import React from 'react';
import { checkIsArray } from '../../helpers';

export function Th({classes, text}) {
  return (
    <th className={checkIsArray(classes)}>
      {text}
    </th>
  )
}
