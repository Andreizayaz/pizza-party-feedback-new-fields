import React from 'react';
import { checkIsArray } from '../../helpers';

export function Tbody({classes, children}) {
  return (
    <tbody className={checkIsArray(classes)}>
      {children}
    </tbody>
  )
}
