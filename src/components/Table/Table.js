import React from 'react';
import { checkIsArray } from '../../helpers';

export function Table({classes, children}) {
  return (
    <table className={checkIsArray(classes)}>
      {children}
    </table>
  )
}
